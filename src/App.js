import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import AppHeader from './components/AppHeader/AppHeader';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import Home from './modules/Home/Home';
import Sandbox from './modules/Sandbox/Sandbox';

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
        <SideBar />
        <div style={{ flex: 1, backgroundColor: 'slategrey', display: 'flex', flexDirection: 'column' }}>
          <AppHeader
            handleNavigationToggle={ this.handleNavigationToggle }
            isOpen={ this.state.navigationIsOpen }
          />
          <SiteNavigation
            isOpen={ this.state.navigationIsOpen }
            handleClick={ this.handleNavigationToggle }
          />
          <div style={{ flex: 1, display: 'flex', overflowY: 'auto' }}>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/sandbox" component={ Sandbox } />
            </Switch>
          </div>
        </div>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
`;
