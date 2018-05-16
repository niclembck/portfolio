import React, { Component } from 'react';
import styled from 'styled-components';

class HamburgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Button onClick={ this.handleClick } isOpen={ this.state.isOpen }>
        <OuterTrigger>
          <TopBar isOpen={ this.state.isOpen } />
          <MiddleBar isOpen={ this.state.isOpen } />
          <BottomBar isOpen={ this.state.isOpen } />
        </OuterTrigger>
      </Button>
    );
  }
}

export default HamburgerButton;

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  width: 50px;
  height: 50px;
  padding: 0;

  &:focus {
    outline: none;
  }
`;
const OuterTrigger = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
`;
const Bar = styled.div`
  position: absolute;
  height: 6px;
  width: 100%;
  background-color: #333;
`;
const TopBar = Bar.extend`
  top: ${props => props.isOpen ? '0px' : '-15px'};
  transform: ${props => props.isOpen ? 'rotate(225deg)' : 'rotate(0deg)'};
  transition: ${props => props.isOpen
    ? 'top 0.2s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0.2s cubic-bezier(0.32, 0.01, 0, 1)'
    : 'top 0.2s 0.5s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0s cubic-bezier(0.32, 0.01, 0, 1)'
  };
`;
const MiddleBar = Bar.extend`
  top: 50%;
  margin-top: -3px;
  opacity: ${props => props.isOpen ? 0 : 1};
  transition: ${props => props.isOpen ? 'opacity 0.2s linear' : 'opacity 0.5s linear'};
`;
const BottomBar = Bar.extend`
  bottom: ${props => props.isOpen ? '0px' : '-15px'};
  transform: ${props => props.isOpen ? 'rotate(-225deg)' : 'rotate(0deg)'};
  transition: ${props => props.isOpen
    ? 'bottom 0.2s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0.2s cubic-bezier(0.32, 0.01, 0, 1)'
    : 'bottom 0.2s 0.5s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0s cubic-bezier(0.32, 0.01, 0, 1)'
  };
`;
