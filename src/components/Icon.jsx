/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
import { iconList } from '../assets/jss/'
import withStyles from 'react-jss'
import classNames from 'classnames';
import { iconStyle } from '../assets/jss'
import { Button } from './buttons';


const RegularIcon = ({ ...props }) => {
    const {
        name,
        size,
        isButton,
        linkClassName:customLinkClassName,
        link,
        className: customClassName,
        classes,
        ...other
    } = props;
    const className = classNames('uk-icon', customClassName)
    const iconProp = `icon:${props.name};ratio:${props.size};`;
    const width = props.size * 20;
    const height = props.size * 20;

    const linkClassName = classNames('uk-margin-small-right',customLinkClassName, {
        'uk-icon-link': !(link===''),
        'uk-icon-button': isButton,
      })
    const icon = props.link || props.isButton ?
            <a href={`//${props.link}`} target={props.target} className={linkClassName}>
                <span dangerouslySetInnerHTML={{ __html: iconList(width, height, props.name) }} className={className} uk-icon={iconProp} {...other}></span>
            </a> :<span dangerouslySetInnerHTML={{ __html: iconList(width, height, props.name) }} className={className} uk-icon={iconProp} {...other}></span>
    return (icon)
}

RegularIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    isButton: PropTypes.bool,
    linkClassName:PropTypes.string,
    link:PropTypes.string,
    className: PropTypes.string,
}
RegularIcon.defaultProps = {
    name: '',
    size: 1,
    isButton: false,
    className: '',
    linkClassName:'',
    link:''
}

const styledIcon = withStyles(iconStyle)(RegularIcon)

export { styledIcon as Icon }