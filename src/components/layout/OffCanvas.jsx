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

        const offCanvasClass = cx({
            [classes.leftCanvasRoot]: position === 'left',
            [classes.rightCanvasRoot]: position === 'right',
            [classes.openCanvas]: this.state.openCanvas && position === 'left',
            [classes.openCanvasRight]: this.state.openCanvas && position === 'right',
        }, customClassName)

        const offCanvasBarClass = cx({
            [classes.canvasBar]: position === 'left',
            [classes.openCanvas]: this.state.openCanvas && position === 'left',
            [classes.canvasBarRight]: position === 'right',
            [classes.openCanvasRight]: this.state.openCanvas && position==='right',
        })

        return (
            <div className={offCanvasClass} {...other}>
                <div className={offCanvasBarClass}>
                    {React.Children.map(children, (child) => {
                        if ((child.type === OffCanvasBody || child.type === OffCanvasCloseButton)) {
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