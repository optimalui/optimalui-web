import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Card from "./Card";

export const CardMedia = React.forwardRef(function CardMedia(props, ref) {
  const { className, ...other } = props;

  return (
    <div className={cx("uk-card-footer", className)} ref={ref} {...other} />
  );
});

CardMedia.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * align media
   */
  align: PropTypes.oneOf(["top", "left", "right", "bottom"]),
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,
};

CardMedia.defaultProps = {
  align: "top",
};

CardMedia.displayName = "CardMedi";
