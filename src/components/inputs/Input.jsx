import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
/**
 *
 *
 */
export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeHolder: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    width: PropTypes.string,
  };

  static defaultProps = {
    type: "text",
    className: "",
    placeHolder: "",
    disabled: false,
  };
  render() {
    const { type, className, value, placeHolder, size,width, ...other } = this.props;

    const inputClass = cx("uk-input", className, {
      "uk-form-width-medium": size === "medium",
      "uk-form-width-medium uk-form-large": size === "large",
      "uk-form-width-medium uk-form-small": size === "small",
      "uk-form-width-large": width === "large",
      "uk-form-width-small": width === "small",
      "uk-form-width-xsmall": width === "xsmall",
    });

    return (
      <div className="uk-margin">
        <input
          className={inputClass}
          type={type}
          placeholder={placeHolder}
          {...other}
        />
      </div>
    );
  }
}
