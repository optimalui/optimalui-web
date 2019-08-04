import React, { cloneElement } from 'react'
import { offCanvasStyle } from '../../assets/jss'
import injectSheet from 'react-jss'
import { OffCanvas } from '../layout'
import cx from 'classnames'

const OffCanvasOverlay = ({ children,offCanvasPosition="left", overlay = false, overlayBackground = false, className, classes, ...other }) => {
    const overlayClass = cx({
        [classes.overlay]: overlay,
        [classes.overlayBackground]: overlayBackground
    }, className)
    return <div className={overlayClass} {...other}>
        {/* {React.Children.map(children, (child) => {
            if (child.type === OffCanvas) {
                return cloneElement(child, { position:offCanvasPosition,...child.props })
            }
        })} */}
        {children}
    </div>
}

const styledComponent = injectSheet(offCanvasStyle)(OffCanvasOverlay)

export { styledComponent as OffCanvasOverlay }