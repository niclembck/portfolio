import React from 'react';
import styled from 'styled-components';

import HeroContainer from '../../components/HeroContainer/HeroContainer';
import Bike from '../../components/Bike/Bike';
import Mountains from '../../components/Illustrations/Mountains/Mountains';

const Sandbox = (props) => {
  return (
    <Container>
      <HeroContainer>
        <div
          style={{
            backgroundColor: 'burlywood',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          <Bike />
          <Mountains />
        </div>
      </HeroContainer>
    </Container>
  );
};

export default Sandbox;

const Container = styled.div`
  flex: 1;
`;
