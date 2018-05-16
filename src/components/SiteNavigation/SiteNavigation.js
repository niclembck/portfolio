import React, { Component } from 'react';
import styled from 'styled-components';

class SiteNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isOpen !== nextProps.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  render() {
    console.log('state', this.state);
    return (
      <Container isOpen={ this.state.isOpen }>
        <Navigation isOpen={ this.state.isOpen }>
          Navigation
        </Navigation>
      </Container>
    );
  }
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
