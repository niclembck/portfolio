import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Headroom from 'react-headroom';

import AppHeader from './components/AppHeader/AppHeader';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import Home from './modules/Home/Home';
import Sandbox from './modules/Sandbox/Sandbox';
import Footer from './components/Footer/Footer';

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
        <Headroom style={{ zIndex: 3 }}>
          <AppHeader
            handleNavigationToggle={ this.handleNavigationToggle }
            isOpen={ this.state.navigationIsOpen }
          />
        </Headroom>
        <SiteNavigation
          isOpen={ this.state.navigationIsOpen }
          handleClick={ this.handleNavigationToggle }
        />
        <AppContent>
          <PageContent>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/sandbox" component={ Sandbox } />
            </Switch>
          </PageContent>
          <Footer />
        </AppContent>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const AppContent = styled.div`
  flex: 1;
`;
const PageContent = styled.div`
  position: relative;
  z-index: 2;
  background-color: #fff;
`;
