import React, { Component } from 'react';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%', textAlign: 'center', paddingTop: 20 }}>
        <HamburgerButton />
      </div>
    );
  }
}

export default App;
