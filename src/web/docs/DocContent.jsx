/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from './Intro';
import { ButtonDoc,ButtonGroupDoc} from '../docs';


class DocContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tm-main uk-section uk-section-default">
                <div>
                    <Route exact path="/docs/introduction" component={Intro} />
                    <Route path="/docs/button" component={ButtonDoc} />
                    <Route path="/docs/button-group" component={ButtonGroupDoc} />
                </div>
            </div>
        );
    }
}

export default DocContent;