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
            open,
            position,
            classes,
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
        if (prevState.openCanvas !== nextProps.open) {
            return {
                openCanvas: nextProps.open,
                pushBody: nextProps.open && (nextProps.mode === 'push' || nextProps.mode === 'reveal'),
            }
        }

        if (prevState.animationMode !== nextProps.mode) {
            return {
                animationMode: nextProps.mode
            }
        }

        return null
    }

    render() {

        const {
            children,
            className: customClassName,
            classes,
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

        const canvasClass = cx({
                [classes.canvas]: position === 'left',
                [classes.canvasRight]: position === 'right',
    
                [classes.slide]: position === 'left' && animationMode==='slide' ,
                [classes.slideRight]: position === 'right' && animationMode==='slide' ,
                [classes.push]: position === 'left' &&  animationMode==='push' ,
                [classes.reveal]: position === 'left' && animationMode==='reveal' ,
    
                [classes.slideOpen]: position === 'left' && openCanvas && animationMode==='slide' ,
                [classes.slideRightOpen]: position === 'right' && openCanvas && animationMode==='slide' ,

                [classes.pushOpen]: position === 'left' && openCanvas && animationMode==='push' && pushBody ,
                [classes.revealOpen]: position === 'left' && openCanvas && animationMode==='reveal' && pushBody  ,

                [classes.none]: position === 'left' && animationMode==='none',
                [classes.noneOpen]: position === 'left' && openCanvas && animationMode==='none',
    
            })

        const overlayClass = cx({
            [classes.overlay]: overlay,
            [classes.overlayBackground]: overlayBackground && overlay,
        }, overlayClassName)

        const contentClass = cx(classes.canvasContent,{
            [classes.showCanvas]:openCanvas
        })

        const overlayEvents = {
            onClick:overlayClick
        }

        if (pushBody) {
            this.addPushBodyStyle()
        } else {
            this.removePushBodyStyle()
        }


        return (
            <React.Fragment>
                <div className={overlayClass} {...overlayEvents}>
                    <div className={canvasClass} {...other} ref={(node) => { this.offCanvasRef = node }}>
                        <div className={contentClass}>
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