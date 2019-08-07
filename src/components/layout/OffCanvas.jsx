/* eslint-disable */
import React, { Component, cloneElement,useEffect } from 'react';
import ReactDOM from 'react-dom'
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
        width:PropTypes.number,
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
        width:270
    }

    constructor(props) {
        super(props)
        this.state = {
            openCanvas:false,
            animationModeClass:null,
            pushBody:false,
            animationMode:'slide'
        }
    }

    componentDidMount(){
        const {
            mode,
            classes,
            position,
        } = this.props;
        if (position === 'left') {
            document.body.classList.add(classes.beforePushBodyStyle)
        }

    }

    addPushBodyStyle() {
        const { classes } = this.props
        document.body.classList.add(classes.pushBodyStyle)
        document.documentElement.style.overflow = 'hidden'
    }
    removePushBodyStyle(){
        const {classes} = this.props
        document.body.classList.remove(classes.pushBodyStyle)
        document.documentElement.style.overflow = null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
 
        // if (nextProps.mode !== prevState.animationMode) {
        //     return {
        //         animationMode: nextProps.mode,
        //     }
        // }

        // if (nextProps.open !== prevState.openCanvas) {
        //     return {
        //         openCanvas:nextProps.open,
        //     }
        // }

        return {
            pushBody: nextProps.open && (nextProps.mode === 'push' || nextProps.mode === 'reveal')
        }

        return null
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

        const {openCanvas,animationMode,pushBody,animationModeClass} = this.state

        console.log(openCanvas)

        const canvasClass = cx({
            [classes.canvas]: position === 'left',
            [classes.canvasRight]: position === 'right',

            [classes.slide]: position === 'left' && mode==='slide' ,
            [classes.slideRight]: position === 'right' && mode==='slide' ,
            [classes.push]: position === 'left' &&  mode==='push' ,
            [classes.reveal]: position === 'left' && mode==='reveal' ,

            [classes.slideOpen]: position === 'left' && open && mode==='slide' ,
            [classes.slideRightOpen]: position === 'right' && open && mode==='slide' ,
            [classes.pushOpen]: position === 'left' && open && mode==='push' ,
            [classes.revealOpen]: position === 'left' && open && mode==='reveal' ,
        },customClassName)



        const overlayClass = cx({
            [classes.overlay]: overlay,
            [classes.overlayBackground]: overlayBackground && overlay,
        }, overlayClassName)

        const overlayEvents = {
            onClick:overlayClick
        }

        if(pushBody){
            this.addPushBodyStyle()
        }else{
            this.removePushBodyStyle()
        }


        return (
            <React.Fragment>
                {/* <div className={overlayClass} {...overlayEvents}>
                    <div className={canvasClass} {...other} ref={(node) => { this.offCanvasRef = node }}>
                        <div className={classes.canvasContent}>
                            {React.Children.map(children, (child) => {
                                if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                                    return cloneElement(child, { ...child.props })
                                }
                            })}
                        </div>
                    </div>
                </div> */}
            </React.Fragment>   
        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }