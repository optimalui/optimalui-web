import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from './Intro';
import { ButtonDoc } from './ButtonDoc';


class DocContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="uk-container uk-container-small uk-position-relative">
                    <Route exact path="/docs/introduction" component={Intro} />
                    <Route path="/docs/button" component={ButtonDoc} />
            </div>
        );
    }
}

export default DocContent;