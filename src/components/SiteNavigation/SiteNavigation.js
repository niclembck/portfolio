import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

import AppHeader from '../AppHeader/AppHeader';

const SiteNavigation = (props) => {
  const renderNavButtons = () => {
    const navMap = [
      {
        path: '/',
        label: 'Home'
      },
      {
        path: '/work',
        label: 'Work'
      },
      {
        path: '/about',
        label: 'About'
      }
    ];
    return _.map(navMap, link => {
      return (
        <NavLink
          to={ link.path }
          onClick={ props.handleClick }
          key={ link.label }
        >
          { link.label }
        </NavLink>
      );
    });
  };

  return (
    <Container isOpen={ props.isOpen }>
      <HeaderPosition isOpen={ props.isOpen }>
        <AppHeader
          handleNavigationToggle={ props.handleClick }
          isOpen={ props.isOpen }
        />
      </HeaderPosition>
      <Navigation isOpen={ props.isOpen }>{ renderNavButtons() }</Navigation>
    </Container>
  );
};

export default SiteNavigation;

const Container = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.isOpen ? '100%' : '0'};
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.55, 0.05, 0.55, 0.95);
  background-color: rgba(255, 255, 255, .9);
`;
const HeaderPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
`;
const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-flow: column-wrap;
  justify-content: center;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: ${props => props.isOpen
    ? 'opacity 0.2s cubic-bezier(0.03, 0.46, 0.31, 0.97)'
    : 'opacity 0.5s cubic-bezier(0.03, 0.46, 0.31, 0.97)'
  };
`;
const NavLink = styled(Link)`
  padding: 0 20px;
  font-size: 25px;
  color: #333;
  text-decoration: none;
`;
