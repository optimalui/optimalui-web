/* eslint-disable */
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import { OffCanvasBody, OffCanvasCloseButton } from '../layout'
import injectSheet from 'react-jss'
import _ from 'lodash'


class OffCanvas extends Component {
    static propTypes = {
        open: PropTypes.bool,
        mode: PropTypes.string,
    }

    static defaultProps = {
        open: false,
        mode: 'slide',
    }

    constructor(props) {
        super(props)
        this.state = {
            openCanvas: false
        }
        this.handleClickOutSide = this.handleClickOutSide.bind(this)
        this.handleCloseCanvas = this.handleCloseCanvas.bind(this)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ openCanvas: nextProps.open });
    }

    handleClickOutSide(e) {
        if (this.state.openCanvas) {
            this.setState({ openCanvas: false })
        }
    }

    handleCloseCanvas() {
        this.setState({ openCanvas: false })
    }


    render() {

        const {
            children,
            classes,
            className: customClassName,
            open,
            mode,
            overlay,
            ...other
        } = this.props;

        const offCanvasClass = cx(classes.root, {
            [classes.openCanvas]: this.state.openCanvas,
            [classes.slideMode]: mode === 'slide',
        }, customClassName)

        const offCanvasBarClass = cx({
            [classes.openCanvas]: this.state.openCanvas,
        }, classes.canvasBar)

        return (
            <div className={offCanvasClass} {...other}>
                <div className={offCanvasBarClass}>
                    {React.Children.map(children, (child) => {
                        if (child.type === OffCanvasBody || child.type === OffCanvasCloseButton) {
                            return cloneElement(child, { ...child.props })
                        }
                    })}
                </div>
            </div>
        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }