/* eslint-disable */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { buttonActions } from '../../_actions'
import uuidv4 from 'uuid'

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
        this.state = {
            groupId: `button-group-${uuidv4()}`
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        if (this.props.disabled) {
            dispatch(buttonActions.setDisable(this.state.groupId))
        }
    }

    render() {
        const {
            children,
            className: customClassName,
            disabled,
            dispatch,
            ...other
        } = this.props;
        const className = classNames('uk-button-group', customClassName)
        return (
                <span {...other} className={className} group-id={this.state.groupId}>
                    {children}
                </span>
        );
    }
}

const mapStateToProps = (state) => {
    return { disableids: state.buttonReducer.disableIds }
}

const connectedButtonGroup = connect(mapStateToProps)(RegularButtonGroup)

export { connectedButtonGroup as ButtonGroup }
