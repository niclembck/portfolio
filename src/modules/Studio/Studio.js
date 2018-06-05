import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

const { CenteredContent } = LayoutStyles;

const sectionMap = [
  {
    label: 'Intro Header',
    content: <h1>Studio Work</h1>,
    topOffset: '50px',
    bottomOffset: '15%'
  },
  {
    label: 'Intro Subheader',
    content: <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>,
    topOffset: '50px',
    bottomOffset: '10%'
  },
  {
    label: 'Intro Subheader',
    content: <p style={{ paddingRight: 100 }}>
               Mauris ultricies risus ac placerat commodo. Donec facilisis mi eu pretium lacinia. Nunc auctor turpis ut neque vehicula accumsan. Ut imperdiet faucibus dolor, at feugiat ipsum consequat nec.
              </p>,
    topOffset: '50px',
    bottomOffset: '20%'
  }
];

const Studio = (props) => {
  return (
    <Container>
      <HeroContainer>
        <div
          style={{
            backgroundColor: 'darkslategray',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          Studio
        </div>
      </HeroContainer>
      <CenteredContent>
        <DynamicWaypoints data={ sectionMap } />
      </CenteredContent>
    </Container>
  );
};

export default Studio;

const Container = styled.div`
  flex: 1;
`;
