/* eslint-disable */
import React, { Component,cloneElement,crea } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MenuItem } from '.'
import { menuStyle } from '../../assets/jss'
import injectSheet from 'react-jss'
import {noop} from '../../util'
import {connect} from 'mini-store'
import uuidv4 from 'uuid'
import _ from 'lodash'


class RegularMenu extends Component {
    static propTypes = {
        alignItems:PropTypes.string,
        items: PropTypes.array,
        mode:PropTypes.string,
        onMouseLeave:PropTypes.func,
        vertical:PropTypes.bool,
        onSelect:PropTypes.func,
    }
    
    static defaultProps = {
        alignItems:'left',
        items: [],
        mode:"hover",
        onMouseLeave:noop,
        vertical:false,
        onSelect:noop
    }

    constructor(props){
        super(props)
        this.state = {
            activeMenuItemId: null,
            menuItems: [],
            closeMenuItems:false,
        }

        this.subMenu = [];
        this.menu = []
        this.menuRef = React.createRef()
    }

    onSelect = (item,event) => {
        const { onSelect} = this.props;
        console.log(item)
        const info = {
            item: item.props
        };

        if (typeof onSelect === 'function') {
            if (onSelect(info) === false) return;
        } 

        if (typeof event === 'function') {
            debugger;
            //click event
            if (event(info) === false) return; 
        }
    };



    render() {

        const {
            children,
            alignItems,
            className: customClassName,
            items,
            classes,
            mode,
            vertical,
            ...other
        } = this.props;
        

       const {activeMenuItemId,closeMenuItems} = this.state 

       const navClass = cx("uk-navbar-container",customClassName,{
        [classes.verticalNavStyle]:vertical
       })


        const containerClassName = cx({
            "uk-navbar-left": alignItems === 'left',
            "uk-navbar-right": alignItems === 'right',
            "uk-navbar-center": alignItems === 'center',
        })


        const { onSelect } = this

        const events = {
            // onClick:onSelect
        }

        const menuId = `menu-id-${uuidv4()}`


        const SubMenu = ({ menuItems, mode}) => {
            return _.map(menuItems, (item) => {
                if (item.hasOwnProperty('items')) {
                    return <MenuItem 
                                {...item}
                                vertical={vertical}
                                parent={item.hasOwnProperty('items')} 
                                key={uuidv4()} 
                                mode={mode} 
                                menuId={menuId}
                                itemId={`menu-item-${uuidv4()}`}
                                 >
                        {
                            item.hasOwnProperty('items') && <SubMenu menuItems={item['items']} mode={mode} vertical={vertical}/>
                        }
                    </MenuItem>
                } else {
                    return <MenuItem key={uuidv4()} {...item} vertical={vertical}/>
                }
            })
        }

        const navBarClass = cx({
            "uk-navbar-nav":!vertical,
            "uk-nav uk-nav-default":vertical,
        }) 
        
        return (
            <nav className={navClass} uk-navbar={`mode:${mode};vertical:${vertical};`} {...other}  {...events} ref={this.menuRef}>
                <div className={containerClassName}>
                    <ul className="uk-navbar-nav" role="menu" aria-orientation={vertical ? 'vertical' : ''}>
                        {
                            items.length ? <SubMenu menuItems={items} mode={mode} /> :
                                React.Children.map(children, (child, index) => {
                                    if (child.type === MenuItem) {
                                        return cloneElement(child, {
                                            key: `menu-item-${index}`,
                                            vertical: vertical, 
                                            // onClick:this.onSelect.bind(this,child,child.props.onClick) , 
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

const styledMenu = injectSheet(menuStyle)(connectedMenu)

export { styledMenu as Menu }