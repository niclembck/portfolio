import React from 'react';
import styled from 'styled-components';

const HamburgerButton = ({ handleClick, isOpen }) => {
  return (
    <Button onClick={ handleClick } isOpen={ isOpen }>
      <OuterTrigger>
        <TopBar isOpen={ isOpen } />
        <MiddleBar isOpen={ isOpen } />
        <BottomBar isOpen={ isOpen } />
      </OuterTrigger>
    </Button>
  );
}

export default HamburgerButton;


// Button size variables (adjust barHeight to dynamically resize button)
const barHeight = '1px';
const buttonHeight = `calc(${barHeight} * 19)`;

// Button styles and animations
const Button = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  width: ${buttonHeight};
  height: ${buttonHeight};
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-origin: center center;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;
const OuterTrigger = styled.div`
  position: relative;
  width: 100%;
  height: ${barHeight};
`;
const Bar = styled.div`
  position: absolute;
  height: ${barHeight};
  width: 100%;
  background-color: #666;
`;
const TopBar = Bar.extend`
  top: ${props => props.isOpen ? '0px' : `calc(${barHeight} * -6)`};
  transform: ${props => props.isOpen ? 'rotate(225deg)' : 'rotate(0deg)'};
  transition: ${props => props.isOpen
    ? 'top 0.2s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0.2s cubic-bezier(0.32, 0.01, 0, 1)'
    : 'top 0.2s 0.5s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0s cubic-bezier(0.32, 0.01, 0, 1)'
  };
`;
const MiddleBar = Bar.extend`
  top: 50%;
  margin-top: ${`calc((${barHeight} / 2) * -1)`};
  opacity: ${props => props.isOpen ? 0 : 1};
  transition: ${props => props.isOpen ? 'opacity 0.2s linear' : 'opacity 0.5s linear'};
`;
const BottomBar = Bar.extend`
  bottom: ${props => props.isOpen ? '0px' : `calc(${barHeight} * -6)`};
  transform: ${props => props.isOpen ? 'rotate(-225deg)' : 'rotate(0deg)'};
  transition: ${props => props.isOpen
    ? 'bottom 0.2s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0.2s cubic-bezier(0.32, 0.01, 0, 1)'
    : 'bottom 0.2s 0.5s cubic-bezier(0.32, 0.01, 0, 1), transform 0.5s 0s cubic-bezier(0.32, 0.01, 0, 1)'
  };
`;
