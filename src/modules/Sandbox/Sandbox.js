import React from 'react';
import _ from 'lodash';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import AnimateContainer from '../../components/AnimateContainer/AnimateContainer';
import Hero from '../../components/Hero/Hero';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

const sectionMap = [
  {
    label: 'Intro Header',
    content: <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <h1>Sandbox</h1>
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
                I have spent the last 10+ years of my professional life honing the creative skills needed to plan, design, develop and maintain a variety of websites, applications, brands and experiences. With a wealth of experience in both print and digital design, I provide a full spectrum of services to help the needs of both individuals and companies, be they large or small.
              </p>,
    topOffset: '50px',
    bottomOffset: '25%'
  },
  {
    label: 'Left Card',
    content: <img style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, .2)', margin: 10 }} src="http://niclembck.com/images/mftastycard-1.jpg" />,
    topOffset: '110px',
    bottomOffset: '20%',
    animationOrigin: 'left'
  },
  {
    label: 'Right Card',
    content: <img style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, .2)', margin: 10 }} src="http://niclembck.com/images/mftastycard-2.jpg" />,
    topOffset: '90px',
    bottomOffset: '25%',
    animationOrigin: 'right'
  }
];

const Sandbox = (props) => {
  const introArray = [
    sectionMap[0],
    sectionMap[1],
    sectionMap[2]
  ];
  const leftArray = [ sectionMap[3] ];
  const rightArray = [ sectionMap[4] ];
  return (
    <Container>
      <Hero />

      <DynamicWaypoints data={ introArray } />

      <ContentRow>
        <DynamicWaypoints data={ leftArray } />
        <DynamicWaypoints data={ rightArray } />
      </ContentRow>

    </Container>
  );
};

export default Sandbox;

const Container = styled.div`
  flex: 1;
`;
const CardImage = styled.img`
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  margin: 10px;
`;
const ContentRow = styled.div`
  display: flex;
  margin: 0 auto;
  width: 900px;
  padding-bottom: 100px;
`;
