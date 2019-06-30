/* eslint-disable */
import React, { Component,cloneElement,crea } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MenuItem } from '.'
import { menuStyle } from '../../assets/jss'
import withStyles from 'react-jss'
import {noop} from '../../util'
import {connect} from 'mini-store'
import uuidv4 from 'uuid'
import _ from 'lodash'


class RegularMenu extends Component {
    static propTypes = {
        alignItems:PropTypes.string,
        items: PropTypes.array,
        mode:PropTypes.string,
        onMouseLeave:PropTypes.func
    }
    
    static defaultProps = {
        alignItems:'left',
        items: [],
        mode:"hover",
        onMouseLeave:noop
    }

    constructor(props){
        super(props)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.state = {
            activeMenuItemId: null,
            menuItems: [],
            closeMenuItems:false,
        }

        this.subMenu = [];
        this.menu = []
    }

    componentDidMount() {
        const { mode } = this.props;

        if (mode === "hover") {
            document.addEventListener("mousemove", this.toggleMenu)
        } else if (mode === "click") {
            document.addEventListener("click", this.toggleMenu)
        }

    }


    componentWillUnmount() {
        const { mode } = this.props;
        if (mode === "hover") {
            document.removeEventListener("mousemove", this.toggleMenu)
        } else if (mode === "click") {
            document.removeEventListener("click", this.toggleMenu)
        }
    }


    // onItemClick = (item,event) => {
    //     const info = {
    //         item
    //     };

    //     if (typeof event === 'function') {
    //         //click event
    //         if (event(info) === false) return;
    //     }
    // };

    // onItemMouseEnter = (item,event) => {
    //     const { mode } = this.props;
    //     const {activeMenuItemId} = this.state
    //     const info = {
    //         item
    //     };
    //     if (mode === "hover") {
    //        this.toggleMenuItem(item.props.itemId,activeMenuItemId)
    //     }

    //     if (typeof event === 'function') {
    //         //click event
    //         if (event(info) === false) return;
    //     }
    // };


    onMouseLeave = (e) => {
        const { onMouseLeave,mode } = this.props;
        const info = {
            item: this,
        };
        if (mode==="hover") {
            this.toggleMenu(e)
        }
        this.props.onMouseLeave(info)
    };


    toggleMenuItem = (itemId, activeMenuItemId) => {
        this.toggleMenu
        if (activeMenuItemId !== itemId) {
            this.setState({ activeMenuItemId: itemId })
        }
    }


    flattenItems = (items)=> {
        var toReturn = {};
        
        for (var i in items) {
            if (!items.hasOwnProperty(i)) continue;
            
            if ((typeof items[i]) == 'object') {
                var flatObject = this.flattenItems(items[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;
                    
                    toReturn[i + '.' + x] = flatObject[x];
                }
            } else {
                toReturn[i] = items[i];
            }
        }
        return toReturn;
    };
    



    render() {

        const {
            children,
            alignItems,
            className: customClassName,
            items,
            classes,
            mode,
            ...other
        } = this.props;

       const {activeMenuItemId,closeMenuItems} = this.state 


        const containerClassName = cx({
            [classes.leftSide]: alignItems === 'left',
            [classes.rightSide]: alignItems === 'right',
            [classes.center]: alignItems === 'center',
        })


        const {onMouseLeave} = this

        const events = {
            // onMouseLeave,
        }

        const menuId = `menu-id-${uuidv4()}`


        const SubMenu = ({ menuItems, mode}) => {
            return _.map(menuItems, (item) => {
                if (item.hasOwnProperty('items')) {
                    return <MenuItem text={item.text} 
                                parent={item.hasOwnProperty('items')} 
                                key={uuidv4()} 
                                mode={mode} 
                                menuId={menuId}
                                itemId={`menu-item-${uuidv4()}`}
                                 >
                        {
                            item.hasOwnProperty('items') && <SubMenu menuItems={item['items']} mode={mode} />
                        }
                    </MenuItem>
                } else {
                    return <MenuItem text={item.text} key={uuidv4()} />
                }
            })
        }


        
        return (
            <nav className={cx("uk-navbar-container",customClassName)} uk-navbar={`mode:${mode}`} {...other}  {...events}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        {
                            items.length ? <SubMenu menuItems={items} mode={mode} /> :
                                React.Children.map(children, (child, index) => {
                                    if (child.type === MenuItem) {
                                        return cloneElement(child, {
                                            key: `menu-item-${index}`,
                                            mode,
                                            menuId
                                        })

                                    }
                                })
                        }
                    </ul>
                </div>
            </nav>

        )
    }
}

const connectedMenu = connect()(RegularMenu)

const styledMenu = withStyles(menuStyle)(connectedMenu)

export { styledMenu as Menu }