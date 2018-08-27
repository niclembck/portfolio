import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

const { CenteredContent, FullBleed } = LayoutStyles;

const sectionMap = [
  {
    label: 'Earbits Music',
    content: <h1>SORT-OE</h1>,
    topOffset: '50px',
    bottomOffset: '0%'
  },
  {
    label: 'Subtitle',
    content: <h4 style={{ color: '#008A94' }}>Working towards a peaceful world</h4>,
    topOffset: '50px',
    bottomOffset: 0
  },
  {
    label: 'Description',
    content: <p style={{ maxWidth: '45em' }}>
              The Special Operations Requirements Tool - Operating Environments (SORT-OE) is an application that is focused on providing a complete picture of international economic, peace and growth trends. The aim of the application is to provide helpful insight into how government, private and non-profit actions across the world can have a meaningful impact on the future health and prosperity of the world's peoples and cultures.
             </p>,
    topOffset: '50px',
    bottomOffset: '5%'
  },
  {
    label: 'My Role',
    content: <p style={{ maxWidth: '45em', marginBottom: 50 }}>

             </p>,
             topOffset: '50px',
             bottomOffset: '5%'
  },
  {
    label: "SORT-OE Image 1",
    topOffset: '20px',
    bottomOffset: '10%',
    content:  <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
                <img src="/images/sortoe1.jpg" />
              </div>
  },
  {
    label: "SORT-OE Image 2",
    topOffset: '20px',
    bottomOffset: '10%',
    content:  <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
                <img src="/images/sortoe2.jpg" />
              </div>
  },
  {
    label: "SORT-OE Image 3",
    topOffset: '20px',
    bottomOffset: '10%',
    content:  <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
                <img src="/images/sortoe3.jpg" />
              </div>
  }
];


const SortOE = (props) => {
  return (
    <Container>
      <HeroContainer backgroundImage="/images/sortoeHero.jpg" />
      <CenteredContent style={{ paddingTop: 0 }}>
        <DynamicWaypoints data={ sectionMap } />
      </CenteredContent>
    </Container>
  );
};

export default SortOE;

const Container = styled.div`
  flex: 1;
`;
