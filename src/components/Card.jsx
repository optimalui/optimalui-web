import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Card = React.forwardRef(function Card(props, ref) {
  const { className,children, ...other } = props;

  return (
    <div
      ref={ref}
      className={cx("uk-card uk-card-default uk-card-body", className)}
      {...other}
    >
        {children}
    </div>
  );
});

Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

export default Card;
