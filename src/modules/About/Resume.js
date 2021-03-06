import React from 'react';
import styled from 'styled-components';

const Resume = (props) => {
  return (
    <div>
      <Section>
        <Row>
          <Title>Lead UX Designer / Frontend Engineer - SoSA Corp</Title>
          <TimeSpan>2014 - Present</TimeSpan>
        </Row>
        <Description>
          Development of UX for full-service applications including wireframes and mockups. Creation of visual layouts and branding. Angular and React development.
        </Description>
      </Section>
      <Section>
        <Row>
          <Title>UI & UX Designer / Frontend Engineer - Earbits Radio</Title>
          <TimeSpan>2011 - 2014</TimeSpan>
        </Row>
        <Description>
          Concept, strategy, design and frontend implementation of Earbits web platform over several iterations. Maintenance and updates to the site design and functionality based on user testing. Design and production of collateral and cross-promotional materials.
        </Description>
      </Section>
      <Section>
        <Row>
          <Title>Print & Web Designer / Illustrator - Creative B'stro</Title>
          <TimeSpan>2007-2010</TimeSpan>
        </Row>
        <Description>
          Design and development of a variety of projects for print and web. Worked with local and international clients including Johnson & Johnson, BabyCenter, NEC, Varonis, Synergy Housing, UCSF and Clym Environmental.
        </Description>
      </Section>
      <Section>
        <Row>
          <Title>Freelance Print & Web Designer</Title>
          <TimeSpan>2004-2014</TimeSpan>
        </Row>
        <Description>
          Design and development of a variety of print and web based projects for local clients ranging from art galleries, museums and non-propfits to medical and technology companies.
        </Description>
      </Section>
    </div>
  );
};

export default Resume;

const Section = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin: 0;
  }
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
  font-size: 15px;

  @media(max-width : 480px) {
    display: block;
  }
`;
const Title = styled.div`
  font-weight: 600;
  margin-right: 15px;
  color: #333;

  @media(max-width : 480px) {
    margin-bottom: 5px;
  }
`;
const TimeSpan = styled.div`
  color: #b3b3b3;
  font-weight: 300;
`;
const Description = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: 300;
  color: #5f5f5f;
  max-width: 48em;
`;
