/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
import { iconList } from '../assets/jss/'
import withStyles from 'react-jss'
import classNames from 'classnames';
import {iconStyle} from '../assets/jss'


const RegularIcon = ({ ...props }) => {
    const {
        name,
        size,
        isLink,
        to,
        className:customClassName,
        linkClassName:customLinkClassName,
        classes,
        ...other
    } = props;
    const className = classNames('uk-icon',customClassName)
    const linkClassName = classNames('uk-icon-link',customLinkClassName)
    const iconProp = `icon:${props.name};ratio:${props.size};`;
    const width = props.size*20;
    const height = props.size*20;
    const icon = props.isLink ?
        <a href={`//${props.to}`} target={props.target} className={linkClassName}>
            <span dangerouslySetInnerHTML={{__html:iconList(width,height,props.name)}} className={className}  uk-icon={iconProp} {...other}></span>
        </a> : <span dangerouslySetInnerHTML={{__html:iconList(width,height,props.name)}} className={className} uk-icon={iconProp} {...other}></span>
    return (icon)
}

RegularIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    isLink: PropTypes.bool,
    to: PropTypes.string,
    className:PropTypes.string,
}
RegularIcon.defaultProps = {
    name: '',
    size: 1,
    isLink: false,
    to: '',
    className:''
}

const styledIcon = withStyles(iconStyle)(RegularIcon)

export { styledIcon as Icon }