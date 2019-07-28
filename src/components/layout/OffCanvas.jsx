/* eslint-disable */
import React, { Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { offCanvasStyle } from '../../assets/jss'
import {Icon} from '../../components'
import injectSheet from 'react-jss'
import _ from 'lodash'


class OffCanvas extends Component {
    static propTypes = {
        open: PropTypes.bool
    }

    static defaultProps = {
        open: false
    }

    constructor(props) {
        super(props)
        this.state = {
            openCanvas:false
        }
        this.canvasRef = React.createRef()
        this.handleClickOutSide = this.handleClickOutSide.bind(this)
        this.handleCloseCanvas = this.handleCloseCanvas.bind(this)
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutSide)
    }

    componentWillUpdate(nextProps, nextState){
        let root = document.getElementsByTagName( 'html' )[0]
        // if(nextProps.open){
        //     document.body.classList.add("uk-offcanvas-container")
        //     root.classList.add("uk-offcanvas-page")
        // }else{
        //     document.body.classList.remove("uk-offcanvas-container")
        //     root.classList.remove("uk-offcanvas-page")
        // }


    }

    componentWillReceiveProps(nextProps){
            this.setState({ openCanvas: nextProps.open });
    }

    componentWillUnmount(){
        document.removeEventListener("click", this.handleClickOutSide)
    }

    handleClickOutSide(e) {
        // console.log(this.state.outSideClick)
        // if (this.canvasRef && this.props.open) {
        //     if (!this.canvasRef.current.contains(e.target)) {
        //         // this.setState({ outSideClick: true })
        //     }
        // }
    }
    handleCloseCanvas(){
        this.setState({ openCanvas: false })
    }
    

    render() {

        const {
            children,
            classes,
            className: customClassName,
            open,
            ...other
        } = this.props;

        const offCanvasClass = cx(classes.root, {
            [classes.openCanvas]:this.state.openCanvas
        }, customClassName)

        const offCanvasBarClass = cx({
            [classes.openCanvas]:this.state.openCanvas,
        },classes.canvasBar)
        

        return (
            <React.Fragment>
                <div className={offCanvasClass} {...other} ref={this.canvasRef}>
                    <div className={offCanvasBarClass}>

                        <button className={classes.closeBtn} type="button" onClick={this.handleCloseCanvas} uk-close=""></button>

                        <h3>Title</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>
                {/* <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Open</button>

                <div id="offcanvas-usage" uk-offcanvas="">
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