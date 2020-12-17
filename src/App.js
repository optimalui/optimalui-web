/* eslint-disable  */
import React, { Component } from 'react';
<<<<<<< HEAD
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

=======
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import './assets/css/theme.css'
>>>>>>> 4b2aafe8c6f914da9e8b239a92b338bb1c4d408b

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Docs} />
        </Router>
=======
>>>>>>> 4b2aafe8c6f914da9e8b239a92b338bb1c4d408b
      </div>
    );
  }
}
 
export default App;
