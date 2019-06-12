import React, { Component,cloneElement } from 'react';
import cx from 'classnames'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'
import { css} from 'aphrodite/no-important';
import { Icon } from '../Icon'
import {TabItem} from './TabItem'

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
        moreTab:PropTypes.bool
    }
    static defaultProps = {
        className: '',
        disabled:false,
        selected:false,
        text: '',
        id: null,
        title:'',
        alignment:'',
        moreTab:false

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
            moreTab,
            ...other
        } = this.props

        const styles = tabStripStyle(alignment,selected,disabled)

        const className = cx(customClassName,css(styles.text))

        const tabItems =  React.Children.map(children, (child, index) => {
            if (child.type === TabItem) {
                return cloneElement(child, {
                    key: `tab-item-${index}`,
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
                {!moreTab && title}
                {moreTab &&
                    <div>
                        {title}
                        <div className="uk-dropdown" uk-dropdown="mode:click">
                            <ul className="uk-nav uk-dropdown-nav">
                                {tabItems}
                            </ul>
                        </div>
                    </div>
                }
            </li>
        );
    }

}


const styledTab = Tab

export {styledTab as Tab}