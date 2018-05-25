import React from 'react';
import styled from 'styled-components';

const Hero = (props) => {
  return (
    <Container>{ props.children }</Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
  background-color: #c01e6a;
`;
