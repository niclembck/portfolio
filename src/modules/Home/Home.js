import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import SelectedWork from '../../components/SelectedWork/SelectedWork';
import ToolList from '../../components/ToolList/ToolList';

const {
  CenteredContent,
  PaddedTextContainer,
  FullBleed
} = LayoutStyles;

const sectionMap = [
  {
    label: 'Intro Header',
    content: <h1 style={{ marginTop: '20vh' }}>Hi there</h1>,
    topOffset: '50px',
    bottomOffset: '15%'
  },
  {
    label: 'Intro Subheader',
    content: <h3>My name is <a href="/sandbox" className="animatedLink" title="About" style={{ color: '#000' }}>Nic Lembck</a> and I am a <a href="/work" className="animatedLink" title="Work" style={{ color: '#000' }}>UX designer and front-end engineer</a>.</h3>,
    topOffset: '50px',
    bottomOffset: '10%'
  },
   {
    label: 'Intro Paragraph',
    content: <PaddedTextContainer>
              <p style={{ maxWidth: '30em' }}>
                I am a multidisciplinary designer, engineer and illustrator focused on foward-thinking solutions to the problems of the modern times.
              </p>
             </PaddedTextContainer>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Intro Subheader',
    content: <PaddedTextContainer>
              <p style={{ maxWidth: '50em' }}>
                For over 10 years, I have been helping design, develop and maintain a variety of applications, websites and services. I believe in thoughtful, detailed design as a means of empowering individuals and groups, paving the way for a better future for all.
              </p>
             </PaddedTextContainer>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Tool List',
    content: <ToolList />,
    topOffset: '50px',
    bottomOffset: '10%'
  },
  {
    label: 'Selected Work',
    content: <FullBleed color="#eee">
              <CenteredContent>
                <SelectedWork />
              </CenteredContent>
             </FullBleed>,
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
  const aboutArray = [
    sectionMap[3],
    sectionMap[4]
  ];
  const workArray = [ sectionMap[5] ];

  return (
    <Container>
      <HeroContainer backgroundImage="/images/homeHero.png">
        <CenteredContent>
          <DynamicWaypoints data={ introArray } />
        </CenteredContent>
      </HeroContainer>
      <CenteredContent>
        <DynamicWaypoints data={ aboutArray } />
      </CenteredContent>
      <DynamicWaypoints data={ workArray } />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex: 1;
`;
