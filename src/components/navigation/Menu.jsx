import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const RegularMenu = ({ ...props }) => {
    const {
        children,
        center,
        right,
        left,
        className: customClassName,
        ...other
    } = props;

    const className = classNames('uk-navbar-container', customClassName)
    const directionClass = classNames({
        "uk-navbar-left": left,
        "uk-navbar-center": center,
        "uk-navbar-right": right
    })

    return (
        <nav {...other} className={className} uk-navbar="">
            <div className={directionClass}>
                <ul className="uk-navbar-nav">
                    {children}
                </ul>
            </div>
        </nav>
    )
}

RegularMenu.propTypes = {
    center: PropTypes.bool,
    right: PropTypes.bool,
    left: PropTypes.bool,
}

RegularMenu.defaultProps = {
    right: true,
    center: false,
    left: false
}

export { RegularMenu as Menu }