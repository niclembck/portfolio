import React from 'react';
import styled from 'styled-components';

import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';

const photoMap = [
  {
    label: 'Base Phone Image',
    topOffset: '-30px',
    bottomOffset: '10%',
    content:  <div style={{ height: 500, position: 'absolute' }}>
                <img src="/images/bikeTourPhone1.jpg" style={{ height: '100%' }} />
              </div>
  },
  {
    label: 'Layer 1',
    topOffset: '-20px',
    bottomOffset: '40%',
    content:  <div style={{ height: 400, position: 'absolute', left: 30, top: 50 }}>
                <img src="/images/bikeTourPhone2.png" style={{ height: '100%' }} />
              </div>
  },
  {
    label: 'Layer 2',
    topOffset: '-10px',
    bottomOffset: '60%',
    content:  <div style={{ height: 350, position: 'absolute', left: 100, top: 70 }}>
                <img src="/images/bikeTourPhone2.png" style={{ height: '100%' }} />
              </div>
  },
];

const textMap = [
  {
    label: 'header',
    topOffset: '20px',
    bottomOffset: '10%',
    content: <h2>Keep Your Fans Up to Date</h2>
  },
  {
    label: 'body',
    topOffset: '20px',
    bottomOffset: '10%',
    content: <p style={{ maxWidth: 600 }}>
          Every time you complete a section, your progress is updated on the map. Fans and loved ones can keep up to date on how the tour is progressing, when plans change and what lies ahead. Get peace of mind on the road with access to your tour itinerary and an easy way to interact with those still back at home.
        </p>
  }
];

const BikePhoneSection = (props) => {
  return (
    <Container>
      <ImageContainer>
        <DynamicWaypoints data={ photoMap } />
      </ImageContainer>
      <TextContainer>
        <DynamicWaypoints data={ textMap } />
      </TextContainer>
    </Container>
  );
};

export default BikePhoneSection;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  height: 500px;
  width: 400px;
  position: relative;
`;
const TextContainer = styled.div`
  flex: 1;
  padding-top: 20px;
`;
