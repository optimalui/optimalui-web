/* eslint-disable */
import React, { Component,cloneElement,crea } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MenuItem } from '.'
import { menuStyle } from '../../assets/jss'
import withStyles from 'react-jss'
import {noop} from '../../util'
import {menuActions} from '../../_actions'
import {connect} from 'react-redux'
import uuidv4 from 'uuid'
import _ from 'lodash'

const SubMenu = ({ menuItems }) => {
    return _.map(menuItems, (item) => {
        if(item.hasOwnProperty('items')){
            return <MenuItem text={item.text} parent={item.hasOwnProperty('items')}>
                {
                    item.hasOwnProperty('items') && <SubMenu menuItems={item['items']}/>
                }
            </MenuItem>
        }else{
            return <MenuItem text={item.text} />
        }
    })
}


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
            menuItems: []
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


    onItemClick = (item,event) => {
        console.log(item)
        const { mode } = this.props;
        const {activeMenuItemId} = this.state
        const info = {
            item
        };
        if (mode === "click") {
           this.toggleMenuItem(item.props.itemId,activeMenuItemId)
        }

        if (typeof event === 'function') {
            //click event
            if (event(info) === false) return;
        }
    };

    onItemMouseEnter = (item,event) => {
        console.log(item)
        const { mode } = this.props;
        const {activeMenuItemId} = this.state
        const info = {
            item
        };
        if (mode === "hover") {
           this.toggleMenuItem(item.props.itemId,activeMenuItemId)
        }

        if (typeof event === 'function') {
            //click event
            if (event(info) === false) return;
        }
    };


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
        if (activeMenuItemId !== itemId) {
            this.setState({ activeMenuItemId: itemId })
        }
    }
    

    toggleMenu = (e) => {
        if (this.menuRef && !this.menuRef.contains(e.target)) {
            this.setState({ activeMenuItemId: null })
        }
    };

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

    // SubMenu = ({menuItems}) => {
    //     // for(var i in menuItems){
    //     //     if(menuItems[i].hasOwnProperty('items')){
    //     //         this.subMenu.push(this.renderSubMenu(menuItems[i]))
    //     //         return  <MenuItem text={menuItems[i].text} key={uuidv4()} parent>
    //     //                 {this.renderSubMenu(menuItems[i])}
    //     //             </MenuItem>
    //     //     }else{
    //     //         return <MenuItem text={menuItems[i].text} key={uuidv4()}/>
    //     //     }
    //     // }

    //     menuItems.map((item,index)=>(
    //        <MenuItem text={item.text} parent={item.hasOwnProperty('items')}>
    //         {
    //                 item.hasOwnProperty('items') && <SubMenu menuItems={item[index]} />
    //         }
    //         </MenuItem>
    //     ))

    // }
    

    setMenuItems = (items) => {
       return items.map((item,index)=>{
            if(item.hasOwnProperty('items')){
                for(var i in item){
                    
                }
            }else{

            }
        })
    }
    



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

       const {activeMenuItemId} = this.state 

       const {onMouseLeave} = this

        const className = classNames(classes.root, customClassName)

        const containerClassName = classNames({
            [classes.leftSide]: alignItems === 'left',
            [classes.rightSide]: alignItems === 'right',
            [classes.center]: alignItems === 'center',
        })


        const events = {
            onMouseLeave,
        }

        const flattenMenuItems = this.flattenItems(items)

        // for(var i in test){
        //     debugger
        //     let itm = i.split('.')
        //     if(itm.hasOwnProperty('items')){

        //     }
        //     itm.forEach((idx)=>{
        //         if(itm[idx]==='items'){
        //             <MenuItem text>
        //             </MenuItem>
        //         }
        //     })
        //     Object.keys(test[i])
        // }
        


        return (
            <div style={{paddingBottom:'40px'}} ref={(item)=>{this.menuRef = item}}>
            <nav className={className} {...other}  {...events}>
                <div className={containerClassName}>
                    <ul className={classNames(classes.navStyle)}>
                            {
                                // flattenMenuItems.length ? flattenMenuItems.map((item,index) => {
                                //     let itm = index.split('.')//0.text:'item-1' 0.text.0.items:'item-1.1'
                                //     let subMenu = _.filter(itm, (obj, i) => { return obj[i] === 'items' });
                                //     if(subMenu.length){
                                //         <MenuItem parent text={items[itm[0]]['text']}>
                                //             {
                                //                 subMenu.map((sb,i)=>{
                                //                     <MenuItem>
                                //                 })
                                //             }
                                //         </MenuItem>
                                //     }else{
                                //         return <MenuItem text={item[index]} key={uuidv4()}/>
                                //     }
                                // })
                                items.length ? <SubMenu menuItems={items}/>:
                                    React.Children.map(children, (child, index) => {
                                        if (child.type === MenuItem) {
                                            return cloneElement(child, {
                                                key: `menu-item-${index}`,
                                                mode,
                                                isOpen: (child.props.parent && child.props.itemId === activeMenuItemId),
                                                active: child.props.itemId === activeMenuItemId,
                                                onClick: this.onItemClick.bind(this, child, child.props.onClick),
                                                onMouseEnter: this.onItemMouseEnter.bind(this, child, child.props.onClick),
                                            })

                                        }
                                    })
                            }
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}


const styledMenu = withStyles(menuStyle)(RegularMenu)

export { styledMenu as Menu }