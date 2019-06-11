import React, { Component } from 'react';
import cx from 'classnames'
import withStyle from 'react-jss'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'
import { css} from 'aphrodite/no-important';

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
        alignment:PropTypes.string
    }
    static defaultProps = {
        className: '',
        disabled:false,
        selected:false,
        text: '',
        id: null,
        title:'',
        alignment:'',

    }
    constructor(props) {
        super(props);
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
    componentDidMount(){
        this.setState()
    }
    getCssClasses(){
        const {alignment,selected,disabled} = this.props
        return tabStripStyle(alignment,selected,disabled)
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
            ...other
        } = this.props

        const styles = tabStripStyle(alignment,selected,disabled)

        const className = css(customClassName,styles.text)

        return (
            <li
                {...other}
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

// const tabStyle = Tab.getCssClasses();

// const styledTab = withStyle(tabStripStyle)(Tab)

const styledTab = Tab

export {styledTab as Tab}