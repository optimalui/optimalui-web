import React, { Component } from 'react';
import cx from 'classnames'
import {tabStripStyle} from '../../assets/jss' 
import PropTypes from 'prop-types'
import { css} from 'aphrodite/no-important';
import { Icon } from '../Icon'

class TabItem extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.string,
        ]),
        title:PropTypes.string.isRequired
    }
    constructor(props){
        super(props)
    }

    render() {
        const {title} = this.props
        return (
            <li>{title}</li>
        );
    }

}


const styledTab = TabItem

export {styledTab as TabItem}