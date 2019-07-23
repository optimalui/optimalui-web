/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import injectSheet from 'react-jss'
import { menuStyle } from '../../assets/jss'
import { Icon } from '../Icon'
import { connect } from 'mini-store';
import {  Link, withRouter } from 'react-router-dom'
import uuidv4 from 'uuid'


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
        route:PropTypes.string,
        itemId:PropTypes.string,
        toolbar:PropTypes.bool
    };

    static defaultProps = {
        active: false,
        parent: false,
        className: '',
        customDropdownClassName: '',
        textCustomClassName: '',
        mode:"hover",
        itemId:`menu-item-${uuidv4()}`,
        url:'',
        urlTarget:'',
        icon:'',
        iconClassName:'',
        vertical:false,
        route:'',
        toolbar:false
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
        e.stopPropagation();
        const { onSelect,onClick, mode } = this.props;
        const { isOpen, } = this.state

        if (mode === "click") {
            this.setState({ isOpen: !isOpen })
        }

        if (onSelect(e) === false) return;
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
            url,
            urlTarget,
            icon,
            iconClassName:customIconClassName,
            vertical, 
            route,
            staticContext,
            store,
            toolbar,
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

        const itemTextClass = cx({
            [classes.menuItemText]:!toolbar,
            [classes.activeMenuItem]:active
        })


        return (
            <li
                {...mouseEvents}
                {...other}
                className={customClass}
                ref={(item) => { this.menuItemRef = item; }}
                role = "menuitem"
                aria-label = {text}
                aria-disabled = {disabled}
                aria-haspopup = {parent}
                aria-expanded = {isOpen}
                >

                {
                        route ? 
                        <Link replace={route === this.props.history.location.pathname} to={route} className={itemTextClass}>
                            {icon &&  <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && !toolbar && <Icon name="triangle-right" className={classes.iconStyle} />}
                        </Link> :
                        <a href={`//${url}`} target={urlTarget}  className={itemTextClass} onClick={this.handleLinkClick}>
                            {icon && <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && !toolbar && <Icon name="triangle-right" className={classes.iconStyle} />}
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