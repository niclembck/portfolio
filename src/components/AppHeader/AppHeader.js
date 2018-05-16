import React from 'react';
import styled from 'styled-components';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const AppHeader = ({ handleNavigationToggle, isOpen }) => {
  return (
    <Container isOpen={ isOpen }>
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
  padding: ${props => props.isOpen ? '30px' : '10px 20px'};
  transition: padding 0.2s linear, height 0.2s linear;
  background: white;
  z-index: 3;
`;
