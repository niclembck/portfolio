import React from 'react';
import styled from 'styled-components';

import HeroContainer from '../../components/HeroContainer/HeroContainer';

const Illustrations = (props) => {
  return (
    <div>
      <HeroContainer>
        <div
          style={{
            backgroundColor: '#aff0f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              maxWidth: 900,
              margin: '0 auto',
              width: 900
            }}
          >
            <HeroText>Illustrations</HeroText>
          </div>
          <img src="http://niclembck.com/images/illustrations-hero.jpg" alt="Illustrations" />
        </div>
      </HeroContainer>
    </div>
  );
};

export default Illustrations;

const HeroText = styled.div`
  position: absolute;
  top: 170px;
  left: 60px;
  font-size: 90px;
  color: #176f77;
  font-style: italic;
  transform: rotate(-4deg);
  text-shadow: -60px 35px #f2feff;
`;
