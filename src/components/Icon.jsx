/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
import { iconList } from '../assets/jss/'

const RegularIcon = ({ ...props }) => {
    const {
        name,
        size,
        isLink,
        to,
        ...other
    } = props;
    const iconProp = `icon:${props.name};ratio:${props.size};`;
    const width = props.size*20;
    const height = props.size*20;
    const icon = props.isLink ?
        <a href={`//${props.to}`} target={props.target} className="uk-icon-link">
            <span dangerouslySetInnerHTML={{__html:iconList(width,height,props.name)}} uk-icon={iconProp}{...other}></span>
        </a> : <span dangerouslySetInnerHTML={{__html:iconList(width,height,props.name)}} uk-icon={iconProp}{...other}></span>
    return (icon)
}

RegularIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    isLink: PropTypes.bool,
    to: PropTypes.string,
}
RegularIcon.defaultProps = {
    name: '',
    size: 1,
    isLink: false,
    to: ''
}

export { RegularIcon as Icon }