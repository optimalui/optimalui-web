/* eslint-disable */
import React, { Component, cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MenuItem, SubMenu as ContainerMenu } from './'
import { menuStyle } from '../../assets/jss'
import injectSheet from 'react-jss'
import { noop } from '../../util'
import { connect } from 'mini-store'
import uuidv4 from 'uuid'
import _ from 'lodash'


class RegularMenu extends Component {
    static propTypes = {
        alignItems: PropTypes.string,
        items: PropTypes.array,
        mode: PropTypes.string,
        onMouseLeave: PropTypes.func,
        vertical: PropTypes.bool,
        onSelect: PropTypes.func,
        menuId: PropTypes.string
    }

    static defaultProps = {
        alignItems: 'left',
        items: [],
        mode: "hover",
        onMouseLeave: noop,
        vertical: false,
        onSelect: noop,
        menuId: `menu-${uuidv4()}`
    }

    constructor(props) {
        super(props)
        this.state = {
            activeMenuItemId: null,
            menuItems: [],
            closeMenuItems: false,
            updateComponent: true
        }

        this.subMenu = [];
        this.menu = []
        this.menuRef = React.createRef()
    }


    onSelect = (item,event) => {
        event.stopPropagation()
        const { onSelect } = this.props;
        const info = {
            event,
            item: {
                itemId: item.props ? 
                (item.props.itemId ? item.props.itemId : 'undefined-item-id') : 
                (item.itemId ? item.itemId : 'undefined-item-id'),
                text: item.props ? item.props.text : item.text
            }
        }

        if (typeof onSelect === 'function') {
            if (onSelect(info) === false) return;
        }

        this.setState({ updateComponent: false });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.updateComponent 
    }


    render() {

        const {
            children,
            alignItems,
            className: customClassName,
            items,
            classes,
            mode,
            vertical,
            selectedMenuItem,
            menuId,
            ...other
        } = this.props;

        const navClass = cx("uk-navbar-container", customClassName, {
            [classes.verticalNavStyle]: vertical
        })


        const containerClassName = cx({
            "uk-navbar-left": alignItems === 'left',
            "uk-navbar-right": alignItems === 'right',
            "uk-navbar-center": alignItems === 'center',
        })

        const SubMenu = ({ menuItems, mode, itemIndex }) => {
            return _.map(menuItems, (item, index) => {
                const itemId = typeof itemIndex!=='undefined' ? `${menuId}-menu-item-${itemIndex}-${index}` : `${menuId}-menu-item-${index}`
                return createElement(
                    MenuItem,
                    {
                        ...item,
                        vertical,
                        parent: item.hasOwnProperty('items'),
                        key: itemId,
                        mode: mode,
                        menuId: menuId,
                        itemId,
                        onClick: this.onSelect.bind(this, item, itemId)
                    },
                    item.hasOwnProperty('items') && <SubMenu menuItems={item['items']} mode={mode} vertical={vertical} itemIndex={index} />
                )
            })
        }

        const mapRecursive = (children, callback) => (
            React.Children.map(
                children,
                child => (
                    child.props.children
                        ? mapRecursive(child.props.children)
                        : callback(child)
                ),
            )
        );

        const CloneItems = ({ children }) => {
            return React.Children.map(children, (child, index) => {
                return cloneElement(child, {
                    key: `menu-item-${index}`,
                    vertical: vertical,
                    onSelect: this.onSelect.bind(this, child),
                    mode,
                    menuId
                },
                    child.props.parent && <CloneItems children={child.props.children} />
                )
            })

        }

        return (
            <nav className={navClass} uk-navbar={`mode:${mode};vertical:${vertical};`} {...other}  ref={this.menuRef}>
                <div className={containerClassName}>
                    <ul className="uk-navbar-nav" role="menu" aria-orientation={vertical ? 'vertical' : ''}>
                        {
                            items.length ? <SubMenu menuItems={items} mode={mode} /> : <CloneItems children={children} />
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
const mapProps = (state) => ({ selectedMenuItem: state.selectedMenuItem })
const connectedMenu = connect(mapProps)(RegularMenu)

const styledMenu = injectSheet(menuStyle)(connectedMenu)

export { styledMenu as Menu }