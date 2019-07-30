import React from 'react'
import { offCanvasStyle } from '../../assets/jss'
import injectSheet from 'react-jss'
import cx from 'classnames'

const OffCanvasCloseButton = ({children,className,classes,...other})=>(
    <button className={cx("uk-offcanvas-close",classes.closeButton,className)} type="button" uk-close="" {...other}>
        {children}
    </button>
)

const styledComponent = injectSheet(offCanvasStyle)(OffCanvasCloseButton)

export {styledComponent as OffCanvasCloseButton}