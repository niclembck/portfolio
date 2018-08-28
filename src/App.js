import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Headroom from 'react-headroom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppHeader from './components/AppHeader/AppHeader';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import Home from './modules/Home/Home';
import Sandbox from './modules/Sandbox/Sandbox';
import Studio from './modules/Studio/Studio';
import Work from './modules/Work/Work';
import Illustrations from './modules/Illustrations/Illustrations';
import Earbits from './modules/Earbits/Earbits';
import SortOE from './modules/SortOE/SortOE';
import BikeTour2018 from './modules/BikeTour2018/BikeTour2018';
import About from './modules/About/About';
import BikeTour from './modules/BikeTour/BikeTour';
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
        <ScrollToTop>
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
                <Route exact path="/work" component={ Work } />
                <Route path="/work/illustrations" component={ Illustrations } />
                <Route path="/work/earbits" component={ Earbits } />
                <Route path="/work/sortoe" component={ SortOE } />
                <Route path="/bikeTour2018" component={ BikeTour2018 } />
                <Route path="/studio" component={ Studio } />
                <Route path="/sandbox" component={ Sandbox } />
                <Route path="/about" component={ About } />
                <Route path="/bikeTour" component={ BikeTour } />
              </Switch>
            </PageContent>
            <Footer />
          </AppContent>
        </ScrollToTop>
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
