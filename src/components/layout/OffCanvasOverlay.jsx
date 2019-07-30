import React, { cloneElement } from 'react'
import { offCanvasStyle } from '../../assets/jss'
import injectSheet from 'react-jss'
import { OffCanvas } from '../layout'
import cx from 'classnames'

const OffCanvasOverlay = ({ children,className, classes, ...other }) => (
    <div className={cx(classes.overlay, className)} {...other}>
        {React.Children.map(children, (child) => {
            if (child.type === OffCanvas) {
                return cloneElement(child, { ...child.props })
            }
        })}
    </div>
)

const styledComponent = injectSheet(offCanvasStyle)(OffCanvasOverlay)

export { styledComponent as OffCanvasOverlay }