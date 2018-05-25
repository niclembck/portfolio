import React from 'react';
import styled from 'styled-components';

import HeroContainer from '../../components/HeroContainer/HeroContainer';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import SelectedWork from '../../components/SelectedWork/SelectedWork';

const sectionMap = [
  {
    label: 'Intro Header',
    content: <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <h1>Hi there</h1>
              </div>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Intro Subheader',
    content: <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <h3>My name is Nic Lembck and I am a UX designer and front-end engineer.</h3>
              </div>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Intro Subheader',
    content: <p style={{ maxWidth: 900, margin: '0 auto 100px auto', paddingRight: 100 }}>
                For over 10 years, I have been helping designing, developing and maintaining a variety of applications, websites and experiences. I believe in thoughtful, detailed design as a means of empowering individuals and groups, paving the way for a better future for all.
              </p>,
    topOffset: '50px',
    bottomOffset: '25%'
  },
  {
    label: 'Selected Work',
    content: <SelectedWork />,
    topOffset: '100px',
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
          Home Page Hero section
        </div>
      </HeroContainer>
      <DynamicWaypoints data={ introArray } />
      <Content>
        <DynamicWaypoints data={ workArray } />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  flex: 1;
`;
const CardImage = styled.img`
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  margin: 10px;
`;
const Content = styled.div`
  margin: 0 auto;
  width: 900px;
`;
const ContentRow = Content.extend`
  display: flex;
`;
