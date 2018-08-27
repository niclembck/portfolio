import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction = (e) => {
    if (this.props.isOpen && e.key === 'Escape') {
      this.props.handleNavigationToggle();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {
    const { handleNavigationToggle, isOpen } = this.props;

    return (
      <Container>
        <SiteName to="/">
          <Name>Nic Lembck</Name>
          <Title>Design</Title>
        </SiteName>
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
  padding: 10px 30px;
  transition: padding 0.2s linear, height 0.2s linear;
  background-color: #fff;
  z-index: 4;
`;
const SiteName = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 19px;
  text-decoration: none;
`;
const Name = styled.div`
  font-weight: 300;
  color: #fff;
  margin-right: 5px;
  padding: 5px 5px 5px 10px;
  letter-spacing: 1px;
  background-color: #89cce7;
`;
const Title = styled.div`
  font-weight: 300;
  color: #89cce7;
  letter-spacing: 1px;
`;
