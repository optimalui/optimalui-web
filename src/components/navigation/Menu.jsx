/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MenuItem } from './'
import { menuStyle } from '../../assets/jss'
import withStyles from 'react-jss'
import {menuActions} from '../../_actions'
import {connect} from 'react-redux'
import uuidv4 from 'uuid'


class RegularMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            mId : `menu-${uuidv4()}`
        }
    }

    componentDidMount() {
        const { dispatch, openOnClick } = this.props;

        if(openOnClick){
            dispatch(menuActions.setClickMode(this.state.mId))
        }
        
    }

    render() {

        const { mId } = this.state;

        const {
            children,
            center,
            right,
            left,
            className: customClassName,
            items,
            classes,
            openOnClick,
            ...other
        } = this.props;

        const className = classNames(classes.root, customClassName)

        const directionClass = classNames( 
            left ? classes.leftSide :
                right ? classes.rightSide :
                    center ? classes.center :
                        (!right && !center && !left) ? classes.leftSide : ''
        )

        const menuItems = this.props.items && this.props.items.length > 0 ? this.props.items.map((item, index) => (
            (item.items && item.items.length > 0 ?
                <MenuItem text={item.text} parent={true} key={index}>
                    {item.items.map((i, ix) => <MenuItem text={i.text} key={ix} />)}
                </MenuItem> : <MenuItem text={item.text} key={index} />
            )
        )) : '';

        const style = {
            ...this.props.style
        }

        return (
            <nav className={className} uk-navbar="" style={style}>
                <div className={directionClass}>
                    <ul className="uk-navbar-nav" menu-id={mId}>
                        {menuItems || children}
                    </ul>
                </div>
            </nav>
        )
    }
}

RegularMenu.propTypes = {
    center: PropTypes.bool,
    right: PropTypes.bool,
    left: PropTypes.bool,
    items: PropTypes.array,
    openOnClick:PropTypes.bool
}

RegularMenu.defaultProps = {
    right: false,
    center: false,
    left: false,
    items: [],
    openOnClick: false
}

const mapStateToProps = (state) => {
    return { openOnClickIds: state.clickModeMenuReducer.clickModeMenues }
}

const connectedMenu = connect(mapStateToProps)(RegularMenu)

const styledMenu = withStyles(menuStyle)(connectedMenu)

export { styledMenu as Menu }