import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GridItem extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  render() {
    const { className, ...other } = this.props;
    return (
      <div className={className} {...other}>
        {this.props.children}
      </div>
    );
  }
}
