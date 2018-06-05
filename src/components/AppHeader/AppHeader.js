import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction = () => {
    if (this.props.isOpen) {
      this.props.handleNavigationToggle();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {
    const { handleNavigationToggle, isOpen } = this.props

    return (
      <Container>
        <Row to="/">
          <Logo />
          <Name>Nic Lembck</Name>
          <Title>Design</Title>
        </Row>
        <HamburgerButton handleClick={ handleNavigationToggle } isOpen={ isOpen } />
      </Container>
    );
  }

}

export default AppHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  transition: padding 0.2s linear, height 0.2s linear;
  background-color: #fff;
  z-index: 4;
`;
const Row = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 19px;
  text-decoration: none;
`;
const Logo = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0 0 1px 1px #999;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #ddd;
  margin-right: 10px;
`;
const Name = styled.div`
  font-weight: 600;
  color: #333;
  margin-right: 5px;
  letter-spacing: 1px;
`;
const Title = styled.div`
  font-weight: 300;
  color: #757575;
  letter-spacing: 1px;
`;
