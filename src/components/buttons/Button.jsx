import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

class RegularButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabledGroup:false
    }
  }

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    large: PropTypes.bool,
    link: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
    fullWidth: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    active: false,
    primary: false,
    danger: false,
    link: false,
    small: false,
    large: false,
    className: '',
    secondary: false,
    text: false,
    disabled: false,
    fullWidth: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disableids) {
      const parentId = ReactDOM.findDOMNode(this).parentNode.getAttribute("group-id")
      if (nextProps.disableids.includes(parentId)) {
        this.setState({ disabledGroup: true })
      }
    }
  }

  render() {
    const {
      active,
      disabled,
      primary,
      danger,
      link,
      small,
      large,
      secondary,
      text,
      fullWidth,
      className: customClassName,
      dispatch,
      ...other
    } = this.props

    const className = classNames('uk-button', customClassName, {
      'uk-button-default': !primary && !secondary && !danger && !text && !link,
      'uk-button-primary': primary,
      'uk-button-secondary': secondary,
      'uk-button-danger': danger,
      'uk-button-text': text,
      'uk-button-link': link,
      'uk-button-small': small,
      'uk-button-large': large,
      'uk-active': active,
      'uk-width-1-1': fullWidth
    })
    
    const {disabledGroup}=this.state;
    
    return (
      <button {...other} className={className} disabled={disabledGroup ? true:false}/>
    )
  }
}

const mapStateToProps = (state) => {
  return { disableids: state.buttonReducer.disableIds }
}

const connectedButton = connect(mapStateToProps)(RegularButton)

export { connectedButton as Button }
