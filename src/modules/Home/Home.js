import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import SelectedWork from '../../components/SelectedWork/SelectedWork';

const { CenteredContent, PaddedTextContainer, FullBleed } = LayoutStyles;

const sectionMap = [
  {
    label: 'Intro Header',
    content: <h1 style={{ marginTop: '20vh' }}>Hi there</h1>,
    topOffset: '50px',
    bottomOffset: '15%'
  },
  {
    label: 'Intro Subheader',
    content: <h3>My name is <Link to="/sandbox" className="animatedLink" title="About" style={{ color: '#000' }}>Nic Lembck</Link>. I am a <Link to="/work" className="animatedLink" title="Work" style={{ color: '#000' }}>UX designer and front-end engineer</Link>.</h3>,
    topOffset: '50px',
    bottomOffset: '10%'
  },
   {
    label: 'Intro Paragraph',
    content: <PaddedTextContainer>
              <p style={{ maxWidth: '30em' }}>
                Focused on foward-thinking solutions to the problems of the modern times. Particularly interested in sustainability and a healthy reconnection with the world around us.
              </p>
              <Link to="/about" className="animatedLink blueText" style={{ fontSize: 17, fontWeight: 600 }}>Get in touch</Link>
             </PaddedTextContainer>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Selected Work',
    content: <SelectedWork />,
    topOffset: '50px',
    bottomOffset: '20%'
  }
];

const Home = (props) => {
  const introArray = [
    sectionMap[0],
    sectionMap[1],
    sectionMap[2]
  ];
  const workArray = [ sectionMap[3] ];

  return (
    <Container>
      <HeroContainer backgroundImage="/images/homeHero2.png" fullHeight>
        <CenteredContent>
          <DynamicWaypoints data={ introArray } />
        </CenteredContent>
      </HeroContainer>
      <CenteredContent>
        <DynamicWaypoints data={ workArray } />
      </CenteredContent>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex: 1;
`;
