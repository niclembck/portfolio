import React from 'react';
import styled from 'styled-components';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const AppHeader = ({ handleNavigationToggle, isOpen }) => {
  return (
    <Container>
      <div>Yo</div>
      <HamburgerButton handleClick={ handleNavigationToggle } isOpen={ isOpen } />
    </Container>
  );
}

export default AppHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  transition: padding 0.2s linear, height 0.2s linear;
  background: white;
  z-index: 4;
`;
