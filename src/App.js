import React, { Component } from 'react';
import './index.css';
import { Button } from './components/buttons'
import { Menu, MenuItem } from './components/navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Deneme</Button>
        <Button>Test</Button>
        <Menu>
          <MenuItem target="/" text="Item 1" active />
          <MenuItem target="#" text="Item 2" parent>
            <MenuItem target="/" text="Item 3" />
            <MenuItem target="/" text="Item 4" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default App;
