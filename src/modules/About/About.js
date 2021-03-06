import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import Resume from './Resume';

const { CenteredContent } = LayoutStyles;

const imageMap = [
  {
    label: 'About Image',
    topOffset: '20px',
    bottomOffset: '20%',
    imageLink: '/images/McKenziePortrait.jpg'
  }
];

const About = (props) => {
  return (
    <Content>
      <CenteredContent style={{ paddingBottom: 0 }}>
        <ImageContainer>
          <DynamicWaypoints data={ imageMap } />
        </ImageContainer>
      </CenteredContent>
      <AboutSection>
        <SectionTitle>
          About Me
        </SectionTitle>
        <SectionContent>
          <p style={{ marginTop: 0 }}>
            For over 10 years, I have been helping design, develop and maintain a variety of applications, websites and services. I believe in thoughtful, detailed design as a means of empowering our world, paving the way for a better future for all.
          </p>
          <p>
            Along with my passion for UX and UI design, I am an avid musician, cyclist, reader and craftsman. I believe a well-rounded array of creative and intellectual pursuits is the key to a happy life, and am always on the hunt for more tools of expression and creation to add to my arsenal. I am interested in projects that aim to make the world a happier, healthier place.
          </p>
          <p>
            If you would like to collaborate, please get in touch via email at niclembck@gmail.com.
          </p>
        </SectionContent>
      </AboutSection>
      <AboutSection>
        <SectionTitle>
          Experience
        </SectionTitle>
        <SectionContent>
          <Resume />
        </SectionContent>
      </AboutSection>
      <AboutSection>
        <SectionTitle>
          Tool Kit
        </SectionTitle>
        <SectionContent>
          <Row>
            <Disciplines>
              Javascript<br />
              Angular<br />
              HTML<br />
            </Disciplines>
            <Disciplines>
              React<br />
              CSS<br />
              Adobe CS<br />
            </Disciplines>
            <Disciplines>
              UX Design<br />
              Prototyping<br />
              Wireframing<br />
            </Disciplines>
          </Row>
        </SectionContent>
      </AboutSection>
    </Content>
  );
};

export default About;

const Content = styled.div`
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width : 480px) {
    display: block;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  height: 400px;

  @media (max-width : 480px) {
    height: 200px;
  }
`;
const AboutSection = styled(CenteredContent)`
  display: flex;
  border-bottom: 1px solid #e6e6e6;

  &: last-child {
    border: none;
  }

  @media (max-width : 480px) {
    display: block;
  }
`;
const SectionTitle = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 15px;
`;
const SectionContent = styled.div`
  flex: 2;
`;
const Disciplines = styled.p`
  flex: 1;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;
