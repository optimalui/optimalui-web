/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import { getFileExtension } from '../util'


export const Logo = ({ children, size = "small", src, link = '#', className: customClassName, ...other }) => {
    const allowedExt = ['jpeg', 'jpg', 'png', 'svg']
    const imgClass = cx({
        "uk-height-small": size === "small",
        "uk-height-medium": size === "medium",
        "uk-height-large": size === "large"
    })
    if (src) {
        let ext = getFileExtension(src)
        if (allowedExt.includes(ext)) {
            if (ext === 'svg') {
                return <a href={link} className={cx("uk-logo", customClassName)} {...other}>
                    <img className={imgClass} src={src} alt="" />
                </a>
            }
            return <a href={link} className={cx("uk-logo", customClassName)} {...other}>
                <img className={imgClass} src={src} alt="" />
            </a>
        } else {
            throw new Error(`jpeg,jpg,png and svg extension types is allowed.`)
        }
    }

    return <a href={link} className={cx("uk-logo", customClassName)} {...other}>
        {children}
    </a>
}