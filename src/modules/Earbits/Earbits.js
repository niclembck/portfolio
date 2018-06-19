import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import TabletFrame from '../../components/TabletFrame/TabletFrame';

const { CenteredContent, FullBleed } = LayoutStyles;

const sectionMap = [
  {
    label: 'Earbits Music',
    content: <h1>Earbits Music</h1>,
    topOffset: '50px',
    bottomOffset: '0%'
  },
  {
    label: 'Subtitle',
    content: <h4 style={{ color: '#e85a1d' }}>Connecting bands with their fans</h4>,
    topOffset: '50px',
    bottomOffset: 0
  },
  {
    label: 'Description',
    content: <p style={{ maxWidth: '45em' }}>
              Earbits was an internet radio site devoted to helping musicians find and engage with fans. During my time on the team, we experimented with a myriad of ways to directly connect musicians and listeners. Direct listening, track queues, custom channels and social networking alongside a smooth radio experience made up a dynamic and complex platform. Thanks to these features and the success of the platform, Earbits was sold at a profit in 2015.
             </p>,
    topOffset: '50px',
    bottomOffset: '5%'
  },
  {
    label: 'My Role',
    content: <p style={{ maxWidth: '45em', marginBottom: 50 }}>
              As the sole designer and lead front-end developer, it was my job to create a functional, friendly and engaging experience for artists and listeners alike. I was responsible for the entire look and feel of the site, coming up with new features and how to implement them, and writing the HTML and CSS.
             </p>,
             topOffset: '50px',
             bottomOffset: '5%'
  }
];

const Earbits = (props) => {
  return (
    <Container>
      <HeroContainer backgroundImage="/images/earbitsHero.png" />
      <CenteredContent style={{ paddingTop: 0 }}>
        <DynamicWaypoints data={ sectionMap } />
      </CenteredContent>
    </Container>
  );
};

export default Earbits;

const Container = styled.div`
  flex: 1;
`;
