import React from 'react';
import styled from 'styled-components';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const AppHeader = (props) => {
  return (
    <Container>
      <div />
      <HamburgerButton />
    </Container>
  );
}

export default AppHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;
