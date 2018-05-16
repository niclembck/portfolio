import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from './components/AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader />
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
`;
