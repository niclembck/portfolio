import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

import BikePhoneSection from './BikePhoneSection';

const { CenteredContent, FullBleed } = LayoutStyles;

const sectionMap = [
  {
    label: 'Bike Tour 2018',
    content: <h1>Bike Tour</h1>,
    topOffset: '50px',
    bottomOffset: '0%'
  },
  {
    label: 'Subtitle',
    content: <h4 style={{ color: '#89cce7' }}>Staying connected while on the road</h4>,
    topOffset: '50px',
    bottomOffset: 0
  },
  {
    label: 'Description',
    content: <p style={{ maxWidth: '45em' }}>
              As an avid bicycle tourer, I can be on the road for long stretches of time. Before any tour, I plan my ride and route to the best of my ability, knowing all the while that things can change while I am adventuring. With this in mind, I have been building a prototype application to aid in route planning and sharing. The main motivation behind this is to have a way to share my progress and with loved ones on a daily basis, keeping them in the know as I take on the unknown.
             </p>,
    topOffset: '50px',
    bottomOffset: '5%'
  },
  {
    label: 'My Role',
    content: <p style={{ maxWidth: '45em', marginBottom: 50 }}>
              This project is written with React, MapBox and the Strava API. It is an evolving project that will soon be market-ready.
             </p>,
             topOffset: '50px',
             bottomOffset: '5%'
  }
];

const BikeTour2018 = (props) => {
  return (
    <Container>
      <HeroContainer backgroundImage="/images/bikeTourHero.jpg" />
      <CenteredContent style={{ paddingTop: 0 }}>
        <DynamicWaypoints data={ sectionMap } />
      </CenteredContent>
    </Container>
  );
};

export default BikeTour2018;

const Container = styled.div`
  flex: 1;
`;
