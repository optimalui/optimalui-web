import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {dropDownLinkStyle} from '../../assets/jss/dropDownButtonStyle.jsx'
import { css } from 'aphrodite/no-important';
import { Icon } from '../Icon.jsx';
import classNames from 'classnames';


class DropDownButtonItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
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
    }

    static defaultProps = {
        className: '',
        text: '',
        link: '',
        disabled: false,
        linkTarget: '',
        icon:'',
        imageWidth:15,
        imageHeight:15,
        iconClass:'',
        iconClassName:'',
        iconStyle:{},
    }
    handleClick(e) {
        if (this.props.disabled) {
            e.preventDefault()
        }
        
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
            onClick:this.handleClick
        }

        const listContent = <span className={linkClass}>
            {icon ? <Icon name={icon} className={iconClassName} style={iconStyle} /> : ''}
            {imageUrl ? <img src={imageUrl} alt="" className={iconClassName} style={iconStyle} width={imageWidth} height={imageHeight} /> : ''}
            {iconClass ? <i className={iconClass} style={iconStyle}></i> : ''}
            {text}
        </span>
        let linkContent = ''
        if(link && disabled===false){
               linkContent= <a href={link} className={linkClass} target={linkTarget}>
                    {listContent}
                </a>
        }
        return (
            <li {...other} className={listClass} {...eventHandlers}>
                {linkContent}
                {!link && listContent }
            </li>
        );
    }
}

const item = DropDownButtonItem
 
export {item as DropDownButtonItem}