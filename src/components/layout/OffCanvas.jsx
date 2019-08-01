/* eslint-disable */
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import { OffCanvasBody, OffCanvasCloseButton} from '../layout'
import injectSheet from 'react-jss'
import _ from 'lodash'


class OffCanvas extends Component {
    static propTypes = {
        open: PropTypes.bool,
        mode: PropTypes.string,
        position:PropTypes.string,
    }

    static defaultProps = {
        open: false,
        mode: 'slide',
        position:'left'
    }

    constructor(props) {
        super(props)
        this.state = {
            openCanvas: false
        }
        this.handleCloseCanvas = this.handleCloseCanvas.bind(this)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ openCanvas: nextProps.open });
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
            position,
            ...other
        } = this.props;

        // const offCanvasClass = cx({
        //     [classes.leftCanvasRoot]: position === 'left',
        //     [classes.rightCanvasRoot]: position === 'right',
        //     [classes.openCanvas]: this.state.openCanvas && position === 'left',
        //     [classes.openCanvasRight]: this.state.openCanvas && position === 'right',
        // }, customClassName)

        // const offCanvasBarClass = cx({
        //     [classes.canvasBar]: position === 'left',
        //     [classes.openCanvas]: this.state.openCanvas && position === 'left',
        //     [classes.canvasBarRight]: position === 'right',
        //     [classes.openCanvasRight]: this.state.openCanvas && position==='right',
        // })

        const canvasClass = cx({
            [classes.canvas]: position === 'left',
            [classes.canvasRight]: position === 'right',
        })

        const modeClass = cx({
            [classes.slide]: mode === 'slide' && position === 'left',
            [classes.slideOpen]: mode === 'slide' && position === 'left' && this.state.openCanvas,
            [classes.slideRight]: mode === 'slide' && position === 'right',
            [classes.slideRightOpen]: mode === 'slide' && position === 'right' && this.state.openCanvas,
        })

        return (
            // <div className={offCanvasClass} {...other}>
            //     <div className={offCanvasBarClass}>
            //         {React.Children.map(children, (child) => {
            //             if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
            //                 return cloneElement(child, { ...child.props })
            //             }
            //         })}
            //     </div>
            // </div>

                // <div className={menuStyle} {...other}>
                //     <div className="canvas-bar">
                //         {React.Children.map(children, (child) => {
                //             if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                //                 return cloneElement(child, { ...child.props })
                //             }
                //         })}
                //     </div>
                // </div>
                // <div className={cx(canvasClass,modeClass)} {...other}>
                //     <div className={classes.canvasContent}>
                //         {React.Children.map(children, (child) => {
                //             if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                //                 return cloneElement(child, { ...child.props })
                //             }
                //         })}
                //     </div>
                // </div>
                <div className="st-container st-effect-2 st-menu-open">
                <div className="st-menu st-effect-2" id="menu-2">
                     <div className={classes.canvasContent}>
                         {React.Children.map(children, (child) => {
                            if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                                return cloneElement(child, { ...child.props })
                            }
                        })}
                    </div>
                </div>
                </div>

        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }