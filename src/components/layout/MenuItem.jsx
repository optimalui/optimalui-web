/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'react-jss'
import { menuStyle } from '../../assets/jss'
import { noop } from '../../util'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import uuidv4 from 'uuid'

class RegularMenuItem extends Component {

    static propTypes = {
        parent: PropTypes.bool,
        active: PropTypes.bool,
        text: PropTypes.string.isRequired,
        eventKey: PropTypes.string,
        children: PropTypes.any,
        selectedKeys: PropTypes.array,
        disabled: PropTypes.bool,
        onItemHover: PropTypes.func,
        onSelect: PropTypes.func,
        onClick: PropTypes.func,
        onDeselect: PropTypes.func,
        onDestroy: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        isSelected: PropTypes.bool,
    };

    static defaultProps = {
        active: false,
        parent: false,
        onSelect: noop,
        onClick: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        customClassName: '',
        customDropdownClassName: '',
        textCustomClassName: '',
        itemId: uuidv4()
    };

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            active: false,
            clickMode: false,
            clickCount: 0
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.eventType = this.eventType.bind(this);
    }

    eventType = () => (this.state.clickMode ? 'onclick' : 'mousemove')

    componentDidMount() {
        const { active } = this.props;

        this.setState({ active: active });
        document.addEventListener("click", this.toggleMenu)
    }


    componentWillUnmount() {
        document.removeEventListener(this.eventType(), this.toggleMenu)
        document.removeEventListener("click", this.toggleMenu)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.openClickMenuIds) {
            const parentId = ReactDOM.findDOMNode(this).parentNode.getAttribute("menu-id")
            if (nextProps.openClickMenuIds.includes(parentId)) {
                this.setState({ clickMode: true }, () => (document.addEventListener('onclick', this.toggleMenu)))
            } else {
                this.setState({ clickMode: false }, () => (document.addEventListener('mousemove', this.toggleMenu)))
            }
        }
    }


    onClick = (e) => {
        const { onClick } = this.props;
        const { clickMode, clickCount } = this.state;
        const info = {
            item: this,
            domEvent: e,
        };
        if (clickMode) {
            this.toggleMenu(e)
            this.setState({ clickCount: clickCount + 1 })
        }
        onClick(info)
    };

    onMouseEnter = (e) => {
        const { onMouseEnter } = this.props;
        const { clickMode } = this.state;
        const info = {
            item: this,
            domEvent: e,
        };
        if (clickMode == false) {
            this.toggleMenu(e)
        }
        onMouseEnter(info)
    };


    onMouseLeave = (e) => {
        const { onMouseLeave } = this.props;
        const { clickMode } = this.state;
        const info = {
            item: this,
            domEvent: e,
        };
        if (clickMode == false) {
            this.toggleMenu(e)
        }
        onMouseLeave(info)
    };

    toggleMenu = (e) => {
        const { clickMode, clickCount } = this.state
        if (this.menuItemRef && !this.menuItemRef.contains(e.target)) {
            this.setState({ isOpen: false, active: false, clickCount: 0 })
        } else {
            if (clickMode) {
                if (clickCount != 0 && clickCount % 2 == 0) {
                    this.setState({ isOpen: false })
                } else {
                    this.setState({ isOpen: true, active: true })
                }
            } else {
                this.setState({ isOpen: true, active: true })
            }

        }
    };

    render() {

        const {
            parent,
            active,
            disabled,
            text,
            customClassName,
            textCustomClassName,
            customDropdownClassName,
            children,
            classes,
            itemId
        } = this.props;

        const { isOpen, clickMode } = this.state

        const className = classNames(customClassName, {
            "uk-parent": parent,
            "uk-active": active,
        })

        const parentClassName = classNames(customDropdownClassName, classes.dropdownItem)

        const style = {
            ...this.props.style
        }

        const mouseEvents = {
            onClick: disabled ? null : this.onClick,
            onMouseLeave: disabled ? null : this.onMouseEnter,
            onMouseEnter: disabled ? null : this.onMouseLeave,
        }

        const textClassName = classNames(textCustomClassName, classes.menuItemText, active ? classes.activeMenuItemText : '')

        return (
            <li
                {...mouseEvents}
                style={style}
                className={className}
                ref={(item) => { this.menuItemRef = item; }}
                id={itemId}>
                <span className={textClassName}>{text}</span>
                {(parent && isOpen) &&
                    (<div className={parentClassName} >
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            {children}
                        </ul>
                    </div>)}
            </li >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        openClickMenuIds: state.clickModeMenuReducer.clickModeMenues
    }

}

const connectedMenuItem = connect(mapStateToProps)(RegularMenuItem)

const styledMenuItem = withStyles(menuStyle)(connectedMenuItem)


export { styledMenuItem as MenuItem }