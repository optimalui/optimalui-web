import React, { Component } from 'react';
import './index.css';
import { Button } from './components/buttons'
import { Menu, MenuItem } from './components/navigation'
import items from '../src/components/navigation/items.json'
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'uikit/dist/css/uikit-core.css'
import 'uikit/dist/css/uikit.css'
import './assets/web/css/theme.css'
import 'uikit/dist/js/uikit.js'

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
