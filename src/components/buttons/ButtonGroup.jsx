/* eslint-disable */
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { buttonGroupStyle as styles } from '../../assets/jss'
import { css } from 'aphrodite/no-important';

class RegularButtonGroup extends Component {
    static propTypes = {
        className: PropTypes.string,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        className: '',
        disabled: false
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            className: customClassName,
            disabled,
            ...other
        } = this.props;
        const className = css(styles.root,customClassName);
        return (
            <span {...other} className={className}>
                {
                    React.Children.map(children, (item, index) => cloneElement(item, {
                        key: `btn-${index}`,
                        ...item.props,
                        disabled,
                    }))
                }
            </span>
        );
    }
}


const btnGroup = RegularButtonGroup

export { btnGroup as ButtonGroup }
