/* eslint-disable */
import React, { Component,cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MenuItem } from '.'
import { menuStyle } from '../../assets/jss'
import withStyles from 'react-jss'
import {menuActions} from '../../_actions'
import {connect} from 'react-redux'
import uuidv4 from 'uuid'


class RegularMenu extends Component {
    constructor(props){
        super(props)
    }


    render() {

        const {
            children,
            alignItems,
            className: customClassName,
            items,
            classes,
            openOnClick,
            ...other
        } = this.props;

        const className = classNames(classes.root, customClassName)

        const containerClassName = classNames({
            [classes.leftSide]: alignItems === 'left',
            [classes.rightSide]: alignItems === 'right',
            [classes.center]: alignItems === 'center',
        })

        // const menuItems = this.props.items && this.props.items.length > 0 ? this.props.items.map((item, index) => (
        //     (item.items && item.items.length > 0 ?
        //         <MenuItem text={item.text} parent={true} key={index}>
        //             {item.items.map((i, ix) => <MenuItem text={i.text} key={ix} />)}
        //         </MenuItem> : <MenuItem text={item.text} key={index} />
        //     )
        // )) : '';

        const menuItems = React.Children.map(children, (child, index) => {
            if (child.type === MenuItem) {
                return cloneElement(child, {
                    key: `menu-item-${index}`,
                    ...child.props
                })

            }
        });


        return (
            <nav className={className} {...other}>
                <div className={containerClassName}>
                    <ul className={classNames(classes.navStyle)}>
                        {menuItems}
                    </ul>
                </div>
            </nav>
        )
    }
}

RegularMenu.propTypes = {
    alignItems:PropTypes.string,
    items: PropTypes.array,
    openOnClick:PropTypes.bool
}

RegularMenu.defaultProps = {
    alignItems:'left',
    items: [],
    openOnClick: false
}

// const mapStateToProps = (state) => {
//     return { openOnClickIds: state.clickModeMenuReducer.clickModeMenues }
// }

// const connectedMenu = connect(mapStateToProps)(RegularMenu)

const styledMenu = withStyles(menuStyle)(RegularMenu)

export { styledMenu as Menu }