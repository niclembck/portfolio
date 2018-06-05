import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroContainer = (props) => {
  return (
    <Container backgroundImage={ props.backgroundImage }>{ props.children }</Container>
  );
};

export default HeroContainer;

HeroContainer.propTypes = {
  backgroundImage: PropTypes.string
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${props => props.backgroundImage
    ? `url(${props.backgroundImage}) no-repeat center center`
    : 'none'
  };
  background-size: cover;

  img {
    height: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
