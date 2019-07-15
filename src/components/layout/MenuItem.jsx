/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import injectSheet from 'react-jss'
import { menuStyle } from '../../assets/jss'
import { noop } from '../../util'
import ReactDOM from 'react-dom'
import { Icon } from '../Icon'
import uuidv4 from 'uuid'
import { connect } from 'mini-store';
import {css,StyleSheet} from 'aphrodite/no-important'
import { Route, Link, withRouter } from 'react-router-dom'

let parentDropDownStyle = {
    parentStyle:{
        top:'calc(100%-40)px!important'
    }
}

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
        iconClassName:PropTypes.string,
        vertical:PropTypes.bool,
        route:PropTypes.string
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
        iconClassName:'',
        vertical:false,
        route:''
    };

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            active: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }


    handleClick = (e) => {
        const { onClick, mode } = this.props;

        const { isOpen } = this.state

        const info = {
            item: this,
            domEvent: e,
        };

        if (mode === "click") {
            this.setState({ isOpen: !isOpen })
        }

        if (typeof onClick === 'function') {
            if (onClick(info) === false) return;
        }
    };


    handleLinkClick(e){
        const {url,disabled} = this.props
        if(!url || disabled){
            e.preventDefault()
        }
    }

    handleMouseEnter = (e) => {
        const {mode,onMouseEnter} = this.props;

        if (mode === "hover") {
            this.setState({ isOpen: true}) 
        }

        const info = {
            item: this,
            domEvent: e,
        };

        if (typeof onMouseEnter === 'function') {
            if (onMouseEnter(info) === false) return;
        }
    };

    handleMouseLeave = (e) => {
        const { mode,onMouseLeave } = this.props;

        if (mode==="hover") {
            this.setState({ isOpen: false}) 
        }

        const info = {
            item: this,
            domEvent: e,
        };

        if (typeof onMouseLeave === 'function') {
            if (onMouseLeave(info) === false) return;
        }
    };


    render() {
        
        const {
            parent,
            active,
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
            vertical, 
            route,
            staticContext,
            ...other
        } = this.props;

        const { isOpen } = this.state

        const customClass = cx(customClassName, {
            [classes.disabledItem]: disabled,
            'parent': parent
        })




        const mouseEvents = {
            onClick: disabled ? null : this.handleClick, 
            onMouseEnter: disabled ? null : this.handleMouseEnter,
            onMouseLeave: disabled ? null :  this.handleMouseLeave,
        }

        const iconClass = cx(classes.iconClass,customIconClassName)

        const parentClassName = cx(customDropdownClassName, { 
            "uk-navbar-dropdown": parent,
            [classes.subMenuWrapper]: parent
        })


        return (
            <li
                {...mouseEvents}
                className={customClass}
                ref={(item) => { this.menuItemRef = item; }}
                {...other}
                role = "menuitem"
                aria-label = {text}
                aria-disabled = {disabled}
                aria-haspopup = {parent}
                aria-expanded = {isOpen}
                >

                {
                        route ? 
                        <Link replace={route === this.props.history.location.pathname} to={route} className={cx(classes.menuItemText)}>
                            {icon && <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && <Icon name="triangle-right" className={classes.iconStyle} />}
                        </Link> :
                        <a href={`//${url}`} target={urlTarget} className={cx(classes.menuItemText)} onClick={this.handleLinkClick}>
                            {icon && <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && <Icon name="triangle-right" className={classes.iconStyle} />}
                        </a>

                }

                    
                {(parent && !disabled) &&
                    <div className={parentClassName} ref={(item) => { this.subMenuRef = item; }} uk-drop={vertical ? `boundary:!li; boundary-align: true; mode:${mode};pos: right-justify;`:`mode:${mode}`}>
                        <ul className={cx("uk-nav uk-navbar-dropdown-nav", classes.subMenu)}>
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

const styledMenuItem = injectSheet(menuStyle)(connectedMenuItem)

const routeMenuItem = withRouter(styledMenuItem)

export { routeMenuItem as MenuItem }