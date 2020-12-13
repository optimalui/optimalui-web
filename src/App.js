/* eslint-disable  */
import React, { Component } from 'react';
import { Button } from './components/buttons'
import { Menu, MenuItem } from './components/layout'
import items from '../src/components/layout/items.json'
import { BrowserRouter as Router, Route} from "react-router-dom";

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import './assets/web/css/theme.css'


import { Docs } from './web/docs' 
import {Home} from './web'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Docs} />
        </Router>
      </div>
    );
  }
}
 
export default App;