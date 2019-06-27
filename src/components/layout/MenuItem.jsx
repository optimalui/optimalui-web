/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
        isOpen:PropTypes.bool,
        text: PropTypes.string,
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
        mode:PropTypes.string,
        data: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    };

    static defaultProps = {
        active: false,
        isOpen:false,
        parent: false,
        onSelect: noop,
        onClick: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        customClassName: '',
        customDropdownClassName: '',
        textCustomClassName: '',
        mode:"hover",
        itemId: `menu-item-${uuidv4()}`
    };

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            active: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        // this.subMenuRef = React.createRef()
    }

    // componentDidMount() {
    //     const { active, mode } = this.props;

    //     this.setState({ active });

    //     if (mode === "hover") {
    //         document.addEventListener("mousemove", this.toggleMenu)
    //     } else if (mode === "click") {
    //         document.addEventListener("click", this.toggleMenu)
    //     }

    // }


    // componentWillUnmount() {
    //     const { mode } = this.props;
    //     if (mode === "hover") {
    //         document.removeEventListener("mousemove", this.toggleMenu)
    //     } else if (mode === "click") {
    //         document.removeEventListener("click", this.toggleMenu)
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.openClickMenuIds) {
        //     const parentId = ReactDOM.findDOMNode(this).parentNode.getAttribute("menu-id")
        //     if (nextProps.openClickMenuIds.includes(parentId)) {
        //         this.setState({ clickMode: true }, () => (document.addEventListener('onclick', this.toggleMenu)))
        //     } else {
        //         this.setState({ clickMode: false }, () => (document.addEventListener('mousemove', this.toggleMenu)))
        //     }
        // }
    }


    // onClick = (e) => {
    //     const { onClick, mode } = this.props;
    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode === "click") {
    //         this.toggleMenu(e)
    //     }
    //     onClick(info)
    // };

    // onMouseEnter = (e) => {
    //     const { onMouseEnter,mode } = this.props;
    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode === "hover") {
    //         this.toggleMenu(e)
    //     }
    //     onMouseEnter(info)
    // };


    // onMouseLeave = (e) => {
    //     const { onMouseLeave,mode } = this.props;
    //     const info = {
    //         item: this,
    //         domEvent: e,
    //     };
    //     if (mode==="hover") {
    //         this.toggleMenu(e)
    //     }
    //     onMouseLeave(info)
    // };

    toggleMenu = (e) => {
        // const { isOpen, active } = this.state
        // const { mode } = this.props;
        // if (this.menuItemRef && !this.menuItemRef.contains(e.target)) {
        //     this.setState({ isOpen: false, active: false })
        // } else {
        //     if (mode === "click") {
        //         this.setState({ isOpen: !isOpen, active: !active })
        //     }else if(mode==="hover"){
        //         this.setState({ isOpen: true, active: true })
        //     }
        // }
    };

    render() {

        const {
            parent,
            active,
            isOpen,
            disabled,
            text,
            customClassName,
            textCustomClassName,
            customDropdownClassName,
            children,
            classes,
            itemId,
            mode,
            data,
            ...other
        } = this.props;

        // const { isOpen} = this.state

        const className = cx(customClassName, {
            // "uk-parent": parent,
            // "uk-active": active,
        })

        const parentClassName = cx(customDropdownClassName, classes.dropdownNavWrapperStyle)


        const mouseEvents = {
            onClick: disabled ? null : this.onClick,
            onMouseLeave: disabled ? null : this.onMouseEnter,
            onMouseEnter: disabled ? null : this.onMouseLeave,
        }

        const textClassName = cx(textCustomClassName, parent ? classes.parentItemText :classes.menuItemText, active ? classes.activeMenuItemText : '')

        return (
            <li
                {...mouseEvents}
                className={className}
                ref={(item) => { this.menuItemRef = item; }}
                {...other}>
                <span className={textClassName}>{text}</span>
                <div>
                    {(parent ) &&
                        (<div className={parentClassName} ref={(item) => { this.subMenuRef = item; }}>
                            <ul className={cx(classes.dropdownNavStyle)}>
                                {
                                    // data.map(item => (
                                    //     <MenuItem text={item.text} parent={item.hasOwnProperty('items')}>
                                    //         {
                                    //             item.hasOwnProperty('items') && <MenuItem data={item}/>
                                    //         }
                                    //     </MenuItem>
                                    // ))
                                    children
                                }
                            </ul>
                        </div>)}
                </div>
            </li >
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         openClickMenuIds: state.clickModeMenuReducer.clickModeMenues
//     }

// }

// const connectedMenuItem = connect(mapStateToProps)(RegularMenuItem)

const styledMenuItem = withStyles(menuStyle)(RegularMenuItem)


export { styledMenuItem as MenuItem }