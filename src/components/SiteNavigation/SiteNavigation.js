import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

const SiteNavigation = (props) => {
  const renderNavButtons = () => {
    const navMap = [
      {
        path: '/',
        label: 'Home'
      },
      {
        path: '/sandbox',
        label: 'Sandbox'
      },
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
      <Navigation isOpen={ props.isOpen }>{ renderNavButtons() }</Navigation>
    </Container>
  );
};

export default SiteNavigation;

const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: ${props => props.isOpen ? '100%' : '0'};
  overflow: hidden;
  transition: ${props => props.isOpen ? 'height 0s 0s linear' : 'height 0s 0.2s linear'};
`;
const Navigation = styled.nav`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: ${props => props.isOpen ? '100px 50px 50px' : '0'};
  display: flex;
  flex-flow: column-wrap;
  justify-content: center;
  background-color: #fff;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: ${props => props.isOpen
    ? 'opacity 0.2s cubic-bezier(0.03, 0.46, 0.31, 0.97)'
    : 'opacity 0.5s cubic-bezier(0.03, 0.46, 0.31, 0.97)'
  };
`;
const NavLink = styled(Link)`
  padding: 0 20px;
  font-size: 20px;
  color: #333;
`;
