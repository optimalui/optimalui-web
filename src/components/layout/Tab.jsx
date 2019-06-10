import React, { Component } from 'react';
import cx from 'classnames'
import withStyle from 'react-jss'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'

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
    }
    static defaultProps = {
        className: '',
        disabled:false,
        selected:false,
        text: '',
        id: null,
        title:'',

    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const info ={
            item:this,
            domEvent:e
        }
        console.log(info)
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
            ...other
        } = this.props

        const className = cx(customClassName,{
            [classes.text]: !selected && !disabled ,
            [classes.selectedTab]: selected,
            [classes.disabledTab]: disabled,
        })

        return (
            <li
                {...other}
                // {...events}
                role="tab"
                aria-selected={selected}
                aria-disabled={disabled}
                tabIndex={tabIndex || (selected ? '0' : null)}
                className={className}

            >
                {title}
            </li>
        );
    }

}

const styledTab = withStyle(tabStripStyle)(Tab)

export {styledTab as Tab}