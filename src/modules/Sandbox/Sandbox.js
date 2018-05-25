import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero/Hero';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

const Sandbox = (props) => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Sandbox;

const Container = styled.div`
  flex: 1;
`;
