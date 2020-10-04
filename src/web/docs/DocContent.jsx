/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from './Intro';
import { ButtonDoc, ButtonGroupDoc, DropDownButtonDoc } from './buttons';
import { TabStripDoc, MenuDoc, ToolbarDoc, OffCanvasDoc, GridDoc } from './layout';
import { IconDoc } from './IconDoc';
import { InputDoc } from './inputs';


class DocContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tm-main uk-section uk-section-default"> 
                <div>
                    <Route exact path="/docs/introduction" component={Intro} />
                    <Route path="/docs/buttons/button" component={ButtonDoc} />
                    <Route path="/docs/buttons/button-group" component={ButtonGroupDoc} />
                    <Route path="/docs/buttons/dropdown-button" component={DropDownButtonDoc} />
                    <Route path="/docs/layout/tabstrip" component={TabStripDoc} />
                    <Route path="/docs/layout/menu" component={MenuDoc} />
                    <Route path="/docs/layout/toolbar" component={ToolbarDoc} />
                    <Route path="/docs/layout/offcanvas" component={OffCanvasDoc} />
                    <Route path="/docs/layout/grid" component={GridDoc} />
                    <Route path="/docs/inputs/input" component={InputDoc} />
                    <Route path="/docs/icon" component={IconDoc} />
                </div>
            </div>
        );
    }
}

export default DocContent;