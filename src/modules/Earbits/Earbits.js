import React from 'react';
import styled from 'styled-components';

import HeroContainer from '../../components/HeroContainer/HeroContainer';
import BrowserContainer from '../../components/BrowserContainer/BrowserContainer';

const Earbits = (props) => {
  return (
    <Container>
      <HeroContainer>
        <div
          style={{
            backgroundColor: 'palevioletred',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          <BrowserContainer image="http://niclembck.com/images/earbits-hero.jpg" />
        </div>
      </HeroContainer>
    </Container>
  );
};

export default Earbits;

const Container = styled.div`
  flex: 1;
`;
