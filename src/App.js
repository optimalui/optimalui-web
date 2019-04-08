import React, { Component } from 'react';
import './index.css';
import { Button } from './components/buttons'
import { Menu, MenuItem } from './components/navigation'
import items from '../src/components/navigation/items.json'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Buttons</h2>
        <Button>Deneme</Button>
        <Button>Test</Button>
        <h2>Navigations</h2>
        <h5>Menu</h5>
        <Menu items={items} openOnClick />
        <p>Click Mode</p>
        <Menu center>
          <MenuItem text="Item 1" active />
          <MenuItem text="Item 2" parent>
            <MenuItem  text="Item 3" />
            <MenuItem  text="Item 4" />
          </MenuItem>
          <MenuItem text="Item 2" parent>
            <MenuItem text="Item 3" />
            <MenuItem text="Item 4" /> 
          </MenuItem>
        </Menu>

      </div>
    );
  }
}

export default App;
