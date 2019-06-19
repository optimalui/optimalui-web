import React, { Component,cloneElement } from 'react';
import cx from 'classnames'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'
import { css} from 'aphrodite/no-important';
import { Icon } from '../Icon'
import {TabItem} from './TabItem'
import { connect } from 'mini-store';


class Tab extends Component {
    static propTypes = {
        className: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
        disabled: PropTypes.bool,
        selected: PropTypes.bool,
        tabIndex: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.string,
        ]),
        title:PropTypes.string.isRequired,
        alignment:PropTypes.string,
        dropdown:PropTypes.bool,
        tabItemContent:PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.string,
        ]),
    }
    static defaultProps = {
        className: '',
        disabled:false,
        selected:false,
        text: '',
        id: null,
        title:'',
        alignment:'',
        dropdown:false,
    }
    constructor(props) {
        super(props);
        this.state = {
            dropDownOpen:false
        }
        this.handleClick = this.handleClick.bind(this)
        this.dropDownWrapperRef = React.createRef()
        this.toggleDropDown = this.toggleDropDown.bind(this)
        this.dropDownClickOutSide = this.dropDownClickOutSide.bind(this)
    }

    handleClick(e){
        const { onClick } = this.props;
        const info ={
            item:this,
            domEvent:e
        }
        if (typeof onClick === 'function') {
            if (onClick(info) === false) return;
        }

    }

    handleItemClick(index, tabItem) {
        if (tabItem) {
            if (!tabItem.props.disabled) {
                const { store } = this.props;
                store.setState({
                    selectedTabItem: tabItem,
                    selectedTabItemIndex: index,
                    // selectedContent: tabItem.props.children
                });
            }
        }

    }

    componentDidMount(){
        document.addEventListener("click", this.dropDownClickOutSide)
    }
    dropDownClickOutSide = (e) => {
        if (this.dropDownWrapperRef.current) {
            if (!this.dropDownWrapperRef.current.contains(e.target)) {
                this.setState({ dropDownOpen: false })
            }
        }
    }

    componentWillUnmount(){
        document.removeEventListener("click", this.dropDownClickOutSide)
    }
    getCssClasses(){
        const {alignment,selected,disabled} = this.props
        return tabStripStyle(alignment,selected,disabled)
    }
    toggleDropDown(){
        const {dropDownOpen} = this.state
        this.setState({dropDownOpen:!dropDownOpen})
    }

    render() {
        const {
            text,
            id,
            tabIndex,
            disabled,
            selected,
            className:customClassName,
            classes,
            children,
            title,
            alignment,
            dropdown,
            animation,
            ...other
        } = this.props

        const {dropDownOpen} = this.state

        const styles = tabStripStyle(alignment,selected,disabled)

        const className = cx(customClassName,css(styles.text))

        const tabItems =  React.Children.map(children, (child, index) => {
            if (child.type === TabItem) {
                return cloneElement(child, {
                    key: `tab-item-${index}`,
                    onClick:this.handleItemClick.bind(this,index,child),
                    ...child.props    
                })

            }
        });

        return (
            <li
                {...other}
                role="tab"
                aria-selected={selected}
                aria-disabled={disabled}
                tabIndex={tabIndex || (selected ? '0' : null)}
                className={className}
            >
                {dropdown &&
                    <div ref={this.dropDownWrapperRef} onClick={this.toggleDropDown}>
                        {title} {dropDownOpen ? <Icon name="triangle-up" /> : <Icon name="triangle-down" />}

                        {dropDownOpen &&
                            <div className={css(styles.dropDownWrapper)}>
                                <ul className={css(styles.dropDownStyle)}>
                                    {tabItems}
                                </ul>
                            </div>
                            
                        }
                    </div>
                }
                {
                    dropdown === false && <span>{title}</span>
                }
            </li>
        );
    }

}


const connectedTab = connect()(Tab)

export {connectedTab as Tab}