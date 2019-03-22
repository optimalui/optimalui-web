import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RegularButton = ({ ...props }) => {
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
    className: customClassName,
    ...other
  } = props

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
  })

  return (
    <button {...other} className={className} />
  )
}

RegularButton.propTypes = {
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
}

RegularButton.defaultProps = {
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
}

export { RegularButton as Button }
