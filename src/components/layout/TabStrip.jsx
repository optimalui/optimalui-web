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
        animationName:PropTypes.string,
        duration: PropTypes.string,
        contentClassName:PropTypes.string
    }
    static defaultProps = {
        className: '',
        selected: 0,
        alignTabs:'',
        animationName:'',
        contentClassName:'',
        duration:'1s'
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedTabIndex:0,
            selectedContent: null
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

    handleSelectedTabItem = (_this,index,tabIndex)=>{
        console.log(index)
    }

    componentDidMount() {
        if (this.props.selected != null) {
            const tab = this.getSelectedTab(this.props.selected)
            if(tab){
                this.setSelectedTabState(this.props.selected,tab)
            }
        }

        // const {selectedTabIndex,selectedContent} = this.props.store.getState()
        // console.log(this.props.store.getState())
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
            console.log(tab)
            if(tab.props.dropdown){
                const {selectedTabIndex,selectedContent} = this.props.store.getState()
                this.setState({
                    selectedIndex: `${index}-${selectedTabIndex}`,
                    selectedContent: selectedContent
                })
            }else{
                this.setState({
                    selectedIndex: index,
                    selectedContent: tab.props.children
                })
            }

        }
    }

    getCssClasses(){
        return tabStripStyle(this.props.alignTabs)
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
            animationName,
            duration,
            ...other
        } = this.props

        const { selectedIndex} = this.state
        
        const styles = tabStripStyle(alignTabs,null,null,animationName,duration)

        const className = css(styles.default)


        const tabElements = React.Children.map(children, (child, index) => {
            if (child.type === Tab) {
                return cloneElement(child, {
                    key: `tab-${index}`,
                    onClick: this.handleSelected.bind(this, index, child.props.onClick),
                    selected: selectedIndex === index,
                    alignment:alignTabs
                })

            }
        });

        const events = {
            onSelect: this.handleSelected
        }
        const {selectedContent} = this.state

        const contentClass = cx(contentClassName, css(styles.content))

        return (
            <React.Fragment>
                    <div className={css(styles.gridStyle)}>
                        <div className={css(styles.tabWrapper)}>
                            <ul className={cx(className, customClassName)} {...other} {...events} ref={this.tabStripRef} role="tablist">
                                {tabElements}
                            </ul>
                        </div>
                        <div className={contentClass}>
                            {selectedContent}
                        </div>
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