/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from './Intro';
<<<<<<< HEAD
import { ButtonDoc,ButtonGroupDoc,IconDoc,MarginDoc,DropDownButtonDoc,TabStripDoc} from '../docs';
=======
import { ButtonDoc,ButtonGroupDoc,IconDoc,MarginDoc,DropDownButtonDoc,CoverDoc} from '../docs';
>>>>>>> bfbcc828c61e8104ef52e7fc5102602794357596


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
<<<<<<< HEAD
                    <Route path="/docs/layout/tabstrip" component={TabStripDoc} />
=======
                    <Route path="/docs/cover" component={CoverDoc} />
>>>>>>> bfbcc828c61e8104ef52e7fc5102602794357596
                    <Route path="/docs/icon" component={IconDoc} />
                </div>
            </div>
        );
    }
}

export default DocContent;