/* eslint-disable */
import React, { Component, cloneElement,useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import { OffCanvasBody, OffCanvasCloseButton} from '../layout'
import _ from 'lodash'
import {noop} from '../../util'
import injectSheet from 'react-jss'


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
        style:PropTypes.object
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
        width:270,
        style:{}
    }

    constructor(props) {
        super(props)
        this.state = {
            openCanvas:false,
            animationModeClass:null,
            pushBody:false,
            animationMode:'slide',
            canvasPosition:'left'
        }
    }

    componentDidMount(){
        const {
            mode,
            open,
            position,
            classes,
        } = this.props;

            
    }

    addPushBodyStyle() {
        const {
            position,
            classes,
        } = this.props;
        const bodyStyle = position === 'left' ? classes.pushBodyStyle :classes.pushBodyStyleRight
        document.body.classList.add(bodyStyle)
        document.documentElement.style.overflow = 'hidden'
    }
    removePushBodyStyle(){
        const {
            position,
            classes,
        } = this.props;
        const bodyStyle = position === 'left' ? classes.pushBodyStyle : classes.pushBodyStyleRight
        document.body.classList.remove(bodyStyle)
        document.documentElement.style.overflow = null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.openCanvas !== nextProps.open) {
            return {
                openCanvas: nextProps.open,
                pushBody: nextProps.open && (nextProps.mode === 'push' || nextProps.mode === 'reveal'),
            }
        }

        if (prevState.animationMode !== nextProps.mode) {
            return {
                animationMode: nextProps.mode,
            }
        }

        if(prevState.canvasPosition!==nextProps.position){
            return {
                canvasPosition:nextProps.position
            }
        }

        return null
    }

    render() {

        const {
            children,
            className: customClassName,
            open,
            mode,
            overlay,
            overlayBackground,
            position,
            overlayClick,
            overlayClassName,
            style:customStyle,
            classes,
            ...other
        } = this.props;

        const {openCanvas,animationMode,pushBody,canvasPosition} = this.state
    
        const canvasClass = cx({
                [classes.canvas]: canvasPosition === 'left',
                [classes.canvasRight]: canvasPosition === 'right',
    
                // [classes.slide]: canvasPosition === 'left' && animationMode==='slide' ,
                // [classes.slideRight]: canvasPosition === 'right' && animationMode==='slide' ,
                // [classes.slideOpen]: canvasPosition === 'left' && openCanvas && animationMode==='slide' ,
                // [classes.slideRightOpen]: canvasPosition === 'right' && openCanvas && animationMode==='slide' ,

                // [classes.push]: canvasPosition === 'left' &&  animationMode==='push' ,
                // [classes.pushOpen]: canvasPosition === 'left' && openCanvas && animationMode==='push',
                // [classes.pushRight]: canvasPosition === 'right' &&  animationMode==='push' ,
                // [classes.pushRightOpen]: canvasPosition === 'right' && openCanvas && animationMode==='push' ,

                // [classes.reveal]: canvasPosition === 'left' && animationMode==='reveal' ,
                // [classes.revealRight]: canvasPosition === 'right' && animationMode==='reveal' ,
                // [classes.revealOpen]: canvasPosition === 'left' && openCanvas && animationMode==='reveal' ,
                // [classes.revealRightOpen]: canvasPosition === 'right' && openCanvas && animationMode==='reveal',
    
                // [classes.none]: canvasPosition === 'left' && animationMode==='none',
                // [classes.noneOpen]: canvasPosition === 'left' && openCanvas && animationMode==='none',
    
            })

        const overlayClass = cx({
            [classes.overlay]: overlay,
            [classes.overlayBackground]: overlayBackground && overlay,
        }, overlayClassName)

        const canvasBarClass = cx({
            [classes.canvasContent]: canvasPosition === 'left',
            [classes.canvasContentRight]: canvasPosition === 'right',

            [classes.slide]: canvasPosition === 'left' && animationMode==='slide' ,
            [classes.slideRight]: canvasPosition === 'right' && animationMode==='slide' ,
            [classes.slideOpen]: canvasPosition === 'left' && openCanvas && animationMode==='slide' ,
            [classes.slideRightOpen]: canvasPosition === 'right' && openCanvas && animationMode==='slide' ,

            [classes.push]: canvasPosition === 'left' && animationMode === 'push',
            [classes.pushOpen]: canvasPosition === 'left' && openCanvas && animationMode === 'push',
            [classes.pushRight]: canvasPosition === 'right' && animationMode === 'push',
            [classes.pushRightOpen]: canvasPosition === 'right' && openCanvas && animationMode === 'push',

            [classes.reveal]: canvasPosition === 'left' && animationMode==='reveal' ,
            [classes.revealRight]: canvasPosition === 'right' && animationMode==='reveal' ,
            [classes.revealOpen]: canvasPosition === 'left' && openCanvas && animationMode==='reveal' ,
            [classes.revealRightOpen]: canvasPosition === 'right' && openCanvas && animationMode==='reveal',

            [classes.none]: canvasPosition === 'left' && animationMode === 'none',
            [classes.noneOpen]: canvasPosition === 'left' && openCanvas && animationMode === 'none',


        })

        if (position === 'left') {
            document.body.classList.add(classes.beforePushBodyStyle)
        } else if (position === 'right') {
            document.body.classList.add(classes.beforePushBodyStyleRight)
        }


        if (pushBody) {
            this.addPushBodyStyle()
        } else {
            this.removePushBodyStyle()
        }

        let canvasStyle = customStyle

        if (openCanvas && animationMode !== 'slide') {
            canvasStyle = Object.assign({ visibility: 'visible', transition: 'visibility .3s' }, canvasStyle)
        } else if (animationMode !== 'slide') {
            canvasStyle = Object.assign({ visibility: 'hidden', zIndex: -1 }, canvasStyle)
        }

        const overlayEvents = {
            onClick:overlayClick
        }


        return (
            <React.Fragment>
                <div className={overlayClass} {...overlayEvents} >
                    <div className={canvasClass} {...other} ref={(node) => { this.offCanvasRef = node }} style={canvasStyle}>
                        <div className={canvasBarClass}>
                            <div className={cx({
                                [classes.canvasContent]: canvasPosition === 'left',
                                [classes.canvasContentRight]: canvasPosition === 'right',
                            })}>
                                {React.Children.map(children, (child) => {
                                    if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
                                        return cloneElement(child, { ...child.props })
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>   
        )
    }
}

const styledOffCanvas = injectSheet(offCanvasStyle)(OffCanvas)

export { styledOffCanvas as OffCanvas }