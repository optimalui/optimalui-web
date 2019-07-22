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

class SubMenu extends Component {
    static propTypes = {
        className:PropTypes.string,
        text: PropTypes.string.isRequired,
        children: PropTypes.any,
        disabled: PropTypes.bool,
        onSelect: PropTypes.func,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        mode:PropTypes.string,
        menuId:PropTypes.string,
        url:PropTypes.string,
        urlTarget:PropTypes.string,
        icon:PropTypes.string,
        iconClassName:PropTypes.string,
        vertical:PropTypes.bool,
        route:PropTypes.string,
        itemId:PropTypes.string
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
        route:''
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleClick = (e) => {

        const { onClick, mode,store} = this.props;

        const { isOpen } = this.state

        const info = {
            item: this, 
            domEvent: e,
        };

        if (mode === "click") {
            this.setState({ isOpen: !isOpen })
        }

        store.setState({
            selectedMenuItem: this
        })

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
            text,
            disabled,
            classes,
            vertical,
            mode,
            children,
            route,
            url,
            urlTarget,
            icon,
            menuId,
            staticContext,
            itemId,
            iconClassName,
            ...other} = this.props

        const customClass = cx("parent", {
            [classes.disabledItem]: disabled
        })

        const parentClassName = cx("uk-navbar-dropdown",classes.subMenuWrapper)

        const mouseEvents = {
            // onClick: disabled ? null : this.handleClick, 
            onMouseEnter: disabled ? null : this.handleMouseEnter,
            onMouseLeave: disabled ? null :  this.handleMouseLeave,
        }

        return (
            <li
                {...mouseEvents}
                {...other}
                className={customClass}
                role="menuitem"
                aria-label={text}
                aria-haspopup="true"
            >

                {
                    route ?
                        <Link replace={route === this.props.history.location.pathname} to={route} className={cx(classes.menuItemText)}>
                            {icon && <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && <Icon name="triangle-right" className={classes.iconStyle} />}
                        </Link> :
                        <a href={`//${url}`} target={urlTarget} className={cx(classes.menuItemText)} >
                            {icon && <Icon name={icon} className={iconClass} />}
                            {text}
                            {parent && <Icon name="triangle-right" className={classes.iconStyle} />}
                        </a>

                }

                <div className={parentClassName} ref={(item) => { this.subMenuRef = item; }} uk-drop={vertical ? `boundary:!li; boundary-align: true; mode:${mode};pos: right-justify;` : `mode:${mode}`}>
                    <ul className={cx("uk-nav uk-navbar-dropdown-nav", classes.subMenu)}>
                        {
                            children
                        }
                    </ul>
                </div>


            </li >
        );
    }
}
 

const connecttedSubMenu = connect()(SubMenu)

const styledSubMenu= injectSheet(menuStyle)(connecttedSubMenu)

const routeSubMenu = withRouter(styledSubMenu)

export { routeSubMenu as SubMenu }