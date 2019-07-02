/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'react-jss'
import { menuStyle } from '../../assets/jss'
import { noop } from '../../util'
import ReactDOM from 'react-dom'
import { Icon } from '../Icon'
import uuidv4 from 'uuid'
import { connect } from 'mini-store';

class RegularMenuItem extends Component {

    static propTypes = {
        parent: PropTypes.bool,
        active: PropTypes.bool,
        className:PropTypes.string,
        text: PropTypes.string.isRequired,
        eventKey: PropTypes.string,
        children: PropTypes.any,
        selectedKeys: PropTypes.array,
        disabled: PropTypes.bool,
        onItemHover: PropTypes.func,
        onSelect: PropTypes.func,
        onClick: PropTypes.func,
        onDeselect: PropTypes.func,
        onDestroy: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        isSelected: PropTypes.bool,
        mode:PropTypes.string,
        menuId:PropTypes.string,
        url:PropTypes.string,
        urlTarget:PropTypes.string,
        icon:PropTypes.string,
        iconClassName:PropTypes.string
    };

    static defaultProps = {
        active: false,
        parent: false,
        className: '',
        customDropdownClassName: '',
        textCustomClassName: '',
        mode:"hover",
        itemId:null,
        url:'',
        urlTarget:'',
        icon:'',
        iconClassName:''
    };

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            active: false,
        }
        // this.toggleMenu = this.toggleMenu.bind(this);
        // this.handleClick = this.handleClick.bind(this)
        // this.handleMouseEnter = this.handleMouseEnter.bind(this)
        // this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    componentDidMount() {
        const { active, mode } = this.props;

        this.setState({ active });

        // if (mode === "hover") {
        //     document.addEventListener("mousemove", this.handleMouseLeave)
        // } else if (mode === "click") {
        //     document.addEventListener("click", this.toggleMenu)
        // }

    }


    componentWillUnmount() {
        const { mode } = this.props;
        // if (mode === "hover") {
        //     document.removeEventListener("mousemove", this.toggleMenu)
        // } else if (mode === "click") {
        //     document.removeEventListener("click", this.handleMouseLeave)
        // }
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.openClickMenuIds) {
        //     const parentId = ReactDOM.findDOMNode(this).parentNode.getAttribute("menu-id")
        //     if (nextProps.openClickMenuIds.includes(parentId)) {
        //         this.setState({ clickMode: true }, () => (document.addEventListener('onclick', this.toggleMenu)))
        //     } else {
        //         this.setState({ clickMode: false }, () => (document.addEventListener('mousemove', this.toggleMenu)))
        //     }
        // }
    }


    // handleClick = (e) => {
    //     const { onClick, mode } = this.props;
    //     const { isOpen,active} = this.state

    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode === "click") {
    //         this.setState({ isOpen: !isOpen , active: false })
    //     }
    //     if (typeof onClick === 'function') {
    //         if (onClick(info) === false) return;
    //     }
    // };

    // handleMouseEnter = (e) => {
    //     const { onMouseEnter,mode,store,itemId } = this.props;
    //     const { isOpen,active} = this.state
    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode === "hover") {
    //         store.setState({
    //             currentItemId:itemId
    //         })
    //         this.setState({ isOpen: true, active: true })
    //     }
    //     if (typeof onMouseEnter === 'function') {
    //         if (onMouseEnter(info) === false) return;
    //     }
    // };


    // handleMouseLeave = (e) => {
    //     const {isOpen,active} = this.state
    //     const { onMouseLeave,mode,store,itemId} = this.props;
    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode==="hover") {

    //        const {currentItemId} = store.getState()
            
    //         // this.setState({ isOpen: false , active: false })
    //         if (this.menuItemRef){
    //             if(!this.menuItemRef.parentNode.contains(e.target)) { 
    //                 this.setState({ isOpen: false , active: false })
    //             }
    //             // else{
    //             // if (currentItemId != this.props.itemId) {
    //             //     this.setState({ isOpen: false, active: false })
    //             // }
    //             // }
    //         }
    //     }
    //     if (typeof onMouseLeave === 'function') {
    //         if (onMouseLeave(info) === false) return;
    //     }
    // };
 
    // toggleMenu = (e) => {
    //     const { onMouseLeave,mode,menuId } = this.props;
    //     const {isOpen,active} = this.state
    //     // this.setState({ isOpen: true , active: true })
    //     if (this.menuItemRef){
    //         // if(!this.menuItemRef.contains(e.target)) { 
    //         //     this.setState({ isOpen: false , active: false })
    //         // }else{
    //         //     // this.setState({ isOpen: !isOpen , active: !active })
    //         //         this.setState({ isOpen: true , active: true })
                
    //         // }
    //     }
    // };

    handleLinkClick(e){
        const {url} = this.props
        if(!url){
            e.preventDefault()
        }
    }


    render() {
        

        const {
            parent,
            active,
            // isOpen,
            disabled,
            text,
            className:customClassName,
            textCustomClassName,
            customDropdownClassName,
            children,
            classes,
            itemId,
            menuId,
            mode,
            store,
            url,
            urlTarget,
            icon,
            iconClassName:customIconClassName,
            ...other
        } = this.props;


        const { isOpen} = this.state

        const customClass = cx(customClassName, {
            // "uk-parent": parent,
            // "uk-active": active,
        })

        const parentClassName = cx(customDropdownClassName,"uk-navbar-dropdown", classes.subMenuWrapper,{
            // [classes.showMenuItem]:isOpen,
            // [classes.hideMenuItem]:!isOpen,
        })


        const mouseEvents = {
            onClick: disabled ? null : this.handleClick, 
            onMouseEnter: disabled ? null : this.handleMouseEnter,
            onMouseLeave: disabled ? null :  this.handleMouseLeave,
        }

        const textClassName = cx(textCustomClassName, classes.menuItemText)

        const iconClass = cx(classes.iconClass,customIconClassName)

        return (
            <li
                // {...mouseEvents}
                className={customClass}
                ref={(item) => { this.menuItemRef = item; }}
                {...other}
                >
                
                <a href={`//${url}`} target={urlTarget} className={cx(classes.menuItemText)}  onClick={this.handleLinkClick}>
                    {icon && <Icon name={icon} className={iconClass}/>}
                    {text}
                    {parent && <Icon name="triangle-right" className={classes.iconStyle} />}
                </a>
                    
                    {(parent) &&
                        <div className={parentClassName} ref={(item) => { this.subMenuRef = item; }}>
                            <ul className={cx("uk-nav uk-navbar-dropdown-nav",classes.subMenu)}>
                                {
                                    children
                                }
                            </ul>
                        </div>
                    }
                    
            </li >
        )
    }
}

const connectedMenuItem = connect()(RegularMenuItem)

const styledMenuItem = withStyles(menuStyle)(connectedMenuItem)

export { styledMenuItem as MenuItem }