import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RegularMenuItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            active: false,
        }
        this.onItemHover = this.onItemHover.bind(this);
    }


    onClick = (e) => {
        this.props.onClick(e);
    }

    onMouseLeave = (e) => {
        if (this.menuItemRef && !this.menuItemRef.contains(e.target)) {
            this.setState({ isOpen: false }, () => {
                document.removeEventListener('mousemove', this.onMouseLeave)
            })
        }
    };


    onMouseEnter = (e) => {
        this.setState({ isOpen: true }, () => {
            document.addEventListener('mousemove', this.onMouseLeave);
        });
    };

    onItemHover() {
        this.setState({ isOpen: true })
    }

    render() {
        const {
            text,
            target,
            parent,
            active,
            className: customClassName,
            children,
            disabled,
            ...other
        } = this.props

        const { isOpen } = this.state

        const className = classNames(customClassName, {
            "uk-parent": parent,
            "uk-active": active,
        })

        const parentClassName = classNames("uk-navbar-dropdown", {
            "uk-open": isOpen,
        })

        const mouseEvent = {
            onClick: this.props.disabled ? null : this.onClick,
            onMouseLeave: this.props.disabled ? null : this.onMouseLeave,
            onMouseEnter: this.props.disabled ? null : this.onMouseEnter,
        };

        return (
            <li {...other} className={className} ref={(item) => { this.menuItemRef = item; }}>
                <a
                    href={target}
                    aria-expanded={isOpen}
                    className={classNames({ "uk-open": isOpen })}
                    {...mouseEvent}>{text}</a>
                {parent &&
                    (<div className={parentClassName} >
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            {children}
                        </ul>
                    </div>)}
            </li >
        )
    }
}

RegularMenuItem.propTypes = {
    parent: PropTypes.bool,
    active: PropTypes.bool,
    target: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.any,
    onSelect: PropTypes.func,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
}

RegularMenuItem.defaultProps = {
    active: false,
    parent: false,
}
export { RegularMenuItem as MenuItem }