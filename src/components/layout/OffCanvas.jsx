/* eslint-disable */
import React, { Component, cloneElement,useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import { OffCanvasBody, OffCanvasCloseButton,OffCanvasOverlay} from '../layout'
import injectSheet from 'react-jss'
import _ from 'lodash'
import {noop} from '../../util'



class OffCanvas extends Component {
    static propTypes = {
        open: PropTypes.bool,
        mode: PropTypes.string,
        position:PropTypes.string,
        overlay:PropTypes.bool,
        overlayBackground:PropTypes.bool,
        overlayClick:PropTypes.func,
        overlayClassName:PropTypes.string,
        className:PropTypes.string,
    }

    static defaultProps = {
        open: false,
        mode: 'slide',
        position:'left',
        overlay:false,
        overlayBackground:false,
        overlayClick:noop,
        className:'',
        overlayClassName:'',
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
        if (nextState.openCanvas) {
            if (mode === 'reveal' || mode === 'push') {
                document.body.classList.add(classes.pushBodyStyle)
                document.documentElement.style.overflow = 'hidden' 
            }

        } else {
            document.body.style.left = 0;
            document.body.classList.remove(classes.pushBodyStyle)
            document.documentElement.style.overflow = null 
        }
        
        
    }


    componentWillMount() { 
        const {
            mode,
            classes,
            position,
        } = this.props;
        if (position === 'left') {
            // document.body.classList.add(classes.beforePushBodyStyle)
            document.body.style.position = 'relative';
            document.body.style.left = 0;
            document.body.style.transition = 'left .3s ease-out';
            document.body.style.boxSizing = 'border-box';
            document.body.style.width = '100%';
        }
    }

    componentWillUnmount(){
        document.body.style.position = null;
        document.body.style.left = null;
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
            overlayBackground,
            position,
            overlayClick,
            overlayClassName,
            ...other
        } = this.props;
        
        const slideMode = cx({
            [classes.slide]: position === 'left',
            [classes.slideOpen]: position === 'left' && this.state.openCanvas,
            [classes.slideRight]: position === 'right',
            [classes.slideRightOpen]: position === 'right' && this.state.openCanvas,
        })

        const pushMode = cx({
            [classes.push]: position === 'left' ,
            [classes.pushOpen]: position === 'left' && this.state.openCanvas,
        })

        const revealMode = cx({
            [classes.reveal]: position === 'left' ,
            [classes.revealOpen]: position === 'left' && this.state.openCanvas,
        })


        const canvasClass = cx({
            [classes.canvas]: position === 'left',
            [classes.canvasRight]: position === 'right',
            [slideMode]: mode === 'slide',
            [pushMode]: mode === 'push',
            [revealMode]: mode === 'reveal',
        },customClassName)



        const overlayClass = cx({
            [classes.overlay]: overlay,
            [classes.overlayBackground]: overlayBackground && overlay,
        }, overlayClassName)

        const overlayEvents = {
            onClick:overlayClick
        }
    

        return (
            <React.Fragment>
                <div className={overlayClass} {...overlayEvents}>
                    <div className={canvasClass} {...other} ref={(node) => { this.offCanvasRef = node }}>
                        <div className={classes.canvasContent}>
                            {React.Children.map(children, (child) => {
                                if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                                    return cloneElement(child, { ...child.props })
                                }
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>   

        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }