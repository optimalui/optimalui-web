/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from './Intro';
import { ButtonDoc,ButtonGroupDoc,IconDoc,MarginDoc,DropDownButtonDoc,TabStripDoc,MenuDoc} from '../docs';


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
                    <Route path="/docs/layout/margin" component={MarginDoc} />
                    <Route path="/docs/layout/tabstrip" component={TabStripDoc} />
                    <Route path="/docs/layout/menu" component={MenuDoc} />
                    <Route path="/docs/icon" component={IconDoc} />
                </div>
            </div>
        );
    }
}

export default DocContent;