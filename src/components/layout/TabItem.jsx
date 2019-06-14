import React, { Component } from 'react';
import cx from 'classnames'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'
import { css} from 'aphrodite/no-important';
import {connect} from 'mini-store'

class TabItem extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.string,
        ]),
        title:PropTypes.string.isRequired,
        onItemClick:PropTypes.func,
        disabled:PropTypes.bool,
        className:PropTypes.string,
    }
    static defaultPropTypes = {
        disabled:false,
        className:''
    }
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
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

    

    render() {
        const {title,className:customClassName,disabled,...other} = this.props

        const styles = tabStripStyle()
        const className = cx(customClassName,
            css(styles.dropdownItemStyle, disabled ? styles.disabledDropDownItem : ''))
        return (
            <li className={className} {...other}>{title}</li>
        );
    }

}


const connectedTabItem = connect()(TabItem)

export {connectedTabItem as TabItem}