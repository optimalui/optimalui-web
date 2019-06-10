import React, { Component, cloneElement } from 'react';
import { tabStripStyle } from '../../assets/jss'
import withStyle from 'react-jss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Tab } from './index'
import {noop} from '../../util'



class TabStrip extends Component {
    static propTypes = {
        className: PropTypes.string,
        selected: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        onItemClick: PropTypes.func,
    }
    static defaultProps = {
        className: '',
        onItemClick:noop,
        selected:null
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:null
        }
    }
    handleItemClick(selected) {

        this.setState({ selectedIndex: selected })
        return { selected }
    }
    componentDidMount(){
        if(this.props.selected){
            this.setState({ selectedIndex: this.props.selected })
        }
    }

    render() {
        const {
            classes,
            className: customClassName,
            selected,
            children,
            onItemClick,
            ...other
        } = this.props

        const {selectedIndex} = this.state

        const className = cx(classes.root, customClassName)


        const tabElements = React.Children.map(children, (child, index) => {
            if (child.type === Tab) {
                return cloneElement(child, {
                    key: `tab-${index}`,
                    onClick: this.handleItemClick.bind(this, index),
                    selected: selectedIndex === index
                })
            }
        });

        const events = {
            onSelect:this.handleSelect
        }

        return (
            <React.Fragment>
                <ul className={className} {...other} {...events}>
                    {tabElements}
                </ul>
                <div>

                </div>
            </React.Fragment>
        );
    }
}

const styledTabStrip = withStyle(tabStripStyle)(TabStrip)

export { styledTabStrip as TabStrip }