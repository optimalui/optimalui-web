import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';


const CardHeader = React.forwardRef(function CardHeader(props, ref) {
  const {
    action,
    className,
    component: Component = 'div',
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    ...other
  } = props;

  let title = titleProp;

  if (title != null) {
    title = (
      <div
        variant={avatar ? 'body2' : 'h5'}
        component="span"
        display="block"
        {...titleTypographyProps}
      >
        {title}
      </div>
    );
  }

  let subheader = subheaderProp;
  if (subheader != null) {
    subheader = (
      <div
        className={classes.subheader}
        component="span"
        {...subheaderTypographyProps}
      >
        {subheader}
      </div>
    );
  }

  return (
    <Component className={clsx("uk-card-header", className)} ref={ref} {...other}>
      <div>
        {title}
        {subheader}
      </div>
      {action && <div className={classes.action}>{action}</div>}
    </Component>
  );
});

CardHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes /* @typescript-to-proptypes-ignore */.elementType,
  /**
   * The content of the component.
   */
  subheader: PropTypes.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: PropTypes.object,
  /**
   * The content of the Card Title.
   */
  title: PropTypes.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: PropTypes.object,
};

export default CardHeader;