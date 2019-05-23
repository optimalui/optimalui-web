/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {dropDownLinkStyle} from '../../assets/jss/dropDownButtonStyle.jsx'
import { css } from 'aphrodite/no-important';
import { Icon } from '../Icon.jsx';
import classNames from 'classnames';
import {noop} from '../../util'


class DropDownButtonItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    static propTypes = {
        className: PropTypes.string,
        text: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        link: PropTypes.string,
        linkTarget: PropTypes.string,
        icon:PropTypes.string,
        imageUrl:PropTypes.string,
        imageWidth:PropTypes.number,
        imageHeight:PropTypes.number,
        iconClass:PropTypes.string,
        iconClassName:PropTypes.string,
        iconStyle:PropTypes.object,
        listClassName:PropTypes.string,
    }

    static defaultProps = {
        className: '',
        text: '',
        link: '#', 
        disabled: false,
        linkTarget: '',
        icon:'',
        imageUrl:'',
        imageWidth:15,
        imageHeight:15,
        iconClass:'',
        iconClassName:'',
        iconStyle:{},
        listClassName:'',
        onItemClick:null,
    }
    handleClick(e) {
        if (this.props.disabled) {
            e.preventDefault()
        }
        const info ={
            item:this,
            domEvent:e
        }
        this.props.onClick(info);
        
    }
    handleKeyDown(e){
            this.props.onKeyDown(
                {
                    item: this,
                    domEvent: e
                }
            )
    }
    render() { 
        const {
            className:customClassName,
            listClassName:customListClassName,
            text,
            disabled,
            link,
            linkTarget,
            icon,
            imageUrl,
            imageWidth,
            imageHeight,
            iconClass:customIconClassName,
            iconClassName:customIconClass,
            iconStyle,
            ...other
        } = this.props

        const listClass = css(customListClassName,disabled ? dropDownLinkStyle.disabledItem : '')
        const linkClass = css(dropDownLinkStyle.root,customClassName,disabled ? dropDownLinkStyle.disabledItem : '')
        const iconClassName = classNames('uk-margin-small-right',customIconClass);
        const iconClass = classNames('uk-margin-small-right',customIconClassName);
        const eventHandlers = {
            onClick:this.handleClick,
            onKeyDown:this.handleKeyDown
        }


        return (
            <li {...other} className={listClass} {...eventHandlers}>
                <a href={link} className={linkClass} target={linkTarget}>
                    {icon ? <Icon name={icon} className={iconClassName} style={iconStyle} /> : ''}
                    {imageUrl ? <img src={imageUrl} alt="" className={iconClassName} style={iconStyle} width={imageWidth} height={imageHeight} /> : ''}
                    {iconClass ? <i className={iconClass} style={iconStyle}></i> : ''}
                    {text}
                </a>
            </li>
        );
    }
}

const item = DropDownButtonItem
 
export {item as DropDownButtonItem}