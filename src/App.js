import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader/AppHeader';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationIsOpen: false
    }
  }

  handleNavigationToggle = () => {
    this.setState({ navigationIsOpen: !this.state.navigationIsOpen });
  }

  render() {
    return (
      <AppContainer>
        <AppHeader handleNavigationToggle={ this.handleNavigationToggle } isOpen={ this.state.navigationIsOpen } />
        <SiteNavigation isOpen={ this.state.navigationIsOpen } />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  background-color: slategrey;
`;
