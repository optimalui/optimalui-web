/* eslint-disable */
import React, { Component, cloneElement,useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import { OffCanvasBody, OffCanvasCloseButton,OffCanvasOverlay} from '../layout'
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

    componentWillUpdate(nextProps,nextState){
        const {
            mode,
            classes,
            position,
        } = this.props;
        if (mode === "reveal") {
            if (nextState.openCanvas) {
                document.body.style.left = window.screen.width >= 960 ? '350px' : '270px'
                document.body.style.overflowY = 'scroll'
                document.body.style.touchAction = 'pan-y pinch-zoom'
                document.documentElement.style.overflow = 'hidden'
            } else {
                document.body.style.left = 0;
                document.body.style.overflowY = null
                document.body.style.touchAction = null
                document.documentElement.style.overflow = null
                document.documentElement.style.overflow = null
            }
        }
    }

    componentWillMount() {
        const {
            mode,
            position,
        } = this.props;
        if (mode === 'reveal' && position === 'left') {
            document.body.style.position = 'relative';
            document.body.style.left = 0;
            document.body.style.transition = 'left .3s ease-out';
            document.body.style.boxSizing = 'border-box';
            document.body.style.width = '100%';
        }
    }

    componentWillUnmount(){
        document.body.style.position = null;
        document.body.style.left = 0;
        document.body.style.transition = null;
        document.body.style.boxSizing = null;
        document.body.style.width = null;
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

            [classes.reveal]: mode === 'reveal' && position === 'left',
            [classes.revealOpen]: mode === 'reveal' && position === 'left' && this.state.openCanvas,
        })

        const pusherClass = cx(classes.pusher,{
            [classes.revealPusher]: mode === 'reveal' && position === 'left',
        })



        return (
            <React.Fragment>
                <div className={cx(canvasClass, modeClass)} {...other} ref={(node) => { this.offCanvasRef = node }}>
                    <div className={classes.canvasContent}>
                        {React.Children.map(children, (child) => {
                            if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                                return cloneElement(child, { ...child.props })
                            }
                        })}
                    </div>
                </div>
                <OffCanvasOverlay overlay={this.state.openCanvas} overlayBackground={this.state.openCanvas}></OffCanvasOverlay>

                {/* <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-reveal">Reveal</button>
                <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                    <div className="uk-offcanvas-bar">

                        <button className="uk-offcanvas-close" type="button" uk-close=""></button>

                        <h3>Title</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div> */}
            </React.Fragment>   

        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }