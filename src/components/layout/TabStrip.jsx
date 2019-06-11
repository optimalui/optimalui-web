import React, { Component, cloneElement } from 'react';
import { tabStripStyle } from '../../assets/jss'
import withStyle from 'react-jss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Tab } from './index'
import { onSelectPropType, selectedIndexPropType } from '../../_helpers/propTypes'



class TabStrip extends Component {
    static propTypes = {
        className: PropTypes.string,
        selected: selectedIndexPropType,
        onSelect: onSelectPropType
    }
    static defaultProps = {
        className: '',
        selected: 0
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedContent: null
        }
        this.tabStripRef = React.createRef()
        this.getSelectedTab = this.getSelectedTab.bind(this)
    }
    handleSelected(index, event) {
        const { onSelect } = this.props;
        const tab = this.getSelectedTab(index)
        if(tab){
            this.setSelectedTabState(index,tab)
        }
        const info = {
            selectedTabIndex: index,
            selectedTab: tab
        }
        if (typeof onSelect === 'function') {
            if (onSelect(info) === false) return;
        }
        if (typeof event === 'function') {
            //tab click event
            if (event(info) === false) return;
        }

    }

    componentDidMount() {
        if (this.props.selected != null) {
            const tab = this.getSelectedTab(this.props.selected)
            if(tab){
                this.setSelectedTabState(this.props.selected,tab)
            }
        }
    }
    getSelectedTab(tabIndex) {
        const tab = this.props.children.filter((item, index) => tabIndex === index)
        if (tab[0]) {
            return tab[0]
        }
        return null;
    }
    setSelectedTabState(index,tab){
        this.setState({ 
            selectedIndex: index, 
            selectedContent: tab.props.children 
        })
    }



    render() {
        const {
            classes,
            className: customClassName,
            selected,
            children,
            ...other
        } = this.props

        const { selectedIndex, selectedContent } = this.state

        const className = cx(classes.root, customClassName)


        const tabElements = React.Children.map(children, (child, index) => {
            if (child.type === Tab) {
                return cloneElement(child, {
                    key: `tab-${index}`,
                    onClick: this.handleSelected.bind(this, index, child.props.onClick),
                    selected: selectedIndex === index
                })

            }
        });

        const events = {
            onSelect: this.handleSelected
        }

        return (
            <React.Fragment>
                <ul className={className} {...other} {...events} ref={this.tabStripRef} role="tablist">
                    {tabElements}
                </ul>
                <div className={classes.content}>
                    {selectedContent}
                </div>
            </React.Fragment>
        );
    }
}

const styledTabStrip = withStyle(tabStripStyle)(TabStrip)

export { styledTabStrip as TabStrip }