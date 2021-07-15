/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro, IntroDoc } from './Intro';
import { ButtonDoc, ButtonGroupDoc, DropDownButtonDoc } from './buttons';
import { TabStripDoc, MenuDoc, ToolbarDoc, OffCanvasDoc, GridDoc } from './layout';
import { IconDoc } from './IconDoc';
import { CheckboxDoc, InputDoc, SelectDoc } from './inputs';
import { MarginDoc } from './MarginDoc';
import { RadioDoc } from './inputs/RadioDoc';
import { CardDoc } from './CardDoc';
import { AvatarDoc } from './AvatarDoc';


class DocContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tm-main uk-section uk-section-default"> 
                <div> 
                    <Route path="/" exact component={Intro} />
                    <Route path="/docs/buttons/button" component={ButtonDoc} />
                    <Route path="/docs/buttons/button-group" component={ButtonGroupDoc} />
                    <Route path="/docs/buttons/dropdown-button" component={DropDownButtonDoc} />
                    <Route path="/docs/layout/tabstrip" component={TabStripDoc} />
                    <Route path="/docs/layout/menu" component={MenuDoc} />
                    <Route path="/docs/layout/toolbar" component={ToolbarDoc} />
                    <Route path="/docs/layout/offcanvas" component={OffCanvasDoc} />
                    <Route path="/docs/layout/grid" component={GridDoc} />
                    <Route path="/docs/layout/margin" component={MarginDoc} />
                    <Route path="/docs/inputs/input" component={InputDoc} />
                    <Route path="/docs/inputs/checkbox" component={CheckboxDoc} />
                    <Route path="/docs/inputs/radio" component={RadioDoc} />
                    <Route path="/docs/inputs/select" component={SelectDoc} />
                    <Route path="/docs/icon" component={IconDoc} />
                    <Route path="/docs/card" component={CardDoc} />
                    <Route path="/docs/avatar" component={AvatarDoc} />
                </div>
            </div>
        );
    }
}

export default DocContent;