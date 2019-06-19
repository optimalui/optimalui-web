import React, { Component, cloneElement } from 'react';
import { tabStripStyle } from '../../assets/jss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Tab } from './index'
import { onSelectPropType, selectedIndexPropType } from '../../_helpers/propTypes'
import { css} from 'aphrodite/no-important';
import { connect } from 'mini-store';



class TabStrip extends Component {
    static propTypes = {
        className: PropTypes.string,
        selected: selectedIndexPropType,
        onSelect: onSelectPropType,
        alignTabs:PropTypes.string,
        animation:PropTypes.string,
        duration: PropTypes.string,
        contentClassName:PropTypes.string
    }
    static defaultProps = {
        className: '',
        selected: 0,
        alignTabs:'',
        animation:'',
        contentClassName:'',
        duration:'1s'
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedTabIndex:0,
            selectedContent: null,
            contentAnimation:false,
        }
        this.tabStripRef = React.createRef()
        this.getSelectedTab = this.getSelectedTab.bind(this)
        this.setSelectedTabState = this.setSelectedTabState.bind(this)
    }
    handleSelected(index, event) {
        const { onSelect} = this.props;
        const tab = this.getSelectedTab(index)
        if(tab){
            this.setSelectedTabState(index,tab)
        }
        const info = {
            selectedIndex: index,
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
        const {
            selected,
        } = this.props

        if (selected != null) {
            const tab = this.getSelectedTab(selected)
            if (tab) {
                this.setSelectedTabState(selected, tab)
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

    setSelectedTabState(index, tab) {
        if (!tab.props.disabled) {
            if (tab.props.dropdown) {
                const { selectedTabItemIndex} = this.props.store.getState()
                this.setState({
                    selectedIndex: index,
                    selectedTabItemIndex,
                })
            } else {
                this.setState({
                    selectedIndex: index,
                    selectedTabItemIndex:null,
                })
            }

        }
    }


    render() {
        const {
            classes,
            className: customClassName,
            contentClassName,
            selected,
            children,
            alignTabs,
            store,
            animation,
            duration, 
            ...other
        } = this.props

        const { selectedIndex,selectedTabItemIndex} = this.state
        
        const styles = tabStripStyle(alignTabs,null,null,animation,duration)

        const className = css(styles.default)


        const tabElements = React.Children.map(children, (child, index) => {
            if (child.type === Tab) {
                return cloneElement(child, {
                    key: `tab-${index}`,
                    onClick: this.handleSelected.bind(this, index, child.props.onClick),
                    selected: selectedIndex === index,
                    animation: selectedIndex === index,
                    alignment:alignTabs,
                    ...child.props
                })

            }
        });

        const events = {
            onSelect: this.handleSelected
        }

        let tabStripSelectedContent = tabElements.map((item, index) => {
            if (item.props.dropdown) {
                if (selectedTabItemIndex != null) {
                   return item.props.children.map((tabItem, tabItemIndex) => {
                        if (tabItemIndex === selectedTabItemIndex) {
                            return (
                                <div className={cx(contentClassName, css(styles.content, styles.animation))} key={`${index}-${tabItemIndex}`}>
                                    {tabItem.props.children}
                                </div>
                            )
                        }
                        return null;
                    })
                }
            } else if (index === selectedIndex) {
                return (
                    <div className={cx(contentClassName, css(styles.content, styles.animation))} key={index}>
                        {item.props.children}
                    </div>
                )

            }
            return null;

        })


        return (
            <React.Fragment>
                    <div className={css(styles.gridStyle)}>
                        <div className={css(styles.tabWrapper)}>
                            <ul className={cx(className, customClassName)} {...other} {...events} ref={this.tabStripRef} role="tablist">
                                {tabElements}
                            </ul>
                        </div>
                        {tabStripSelectedContent}
                    </div>
            </React.Fragment>
        );
    }
}

// const mapStore = (state)=>({
//     selectedIndex:state.selectedTabIndex,
//     selectedContent:state.selectedContent

// })
const connectedTabStrip =connect()(TabStrip)
export { connectedTabStrip as TabStrip }