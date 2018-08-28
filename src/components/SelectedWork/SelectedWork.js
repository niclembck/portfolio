import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DynamicWaypoints from '../DynamicWaypoints/DynamicWaypoints';
import WorkTile from '../WorkTile/WorkTile';

const workArray = [
  {
    label: 'SORT-OE',
    content: <WorkTile linkUrl="/work/sortoe" image="/images/thumb-sortoe.jpg" projectName="SORT-OE" />,
    topOffset: '0',
    bottomOffset: '20%'
  },
  {
    label: 'Earbits Card',
    content: <WorkTile linkUrl="/work/earbits" image="/images/thumb-earbits.jpg" projectName="Earbits" />,
    topOffset: '0',
    bottomOffset: '20%'
  },
  {
    label: 'Illustration Card',
    content: <WorkTile linkUrl="/work/illustrations" image="/images/thumb-doodles.jpg" projectName="Illustrations" />,
    topOffset: '0',
    bottomOffset: '20%'
  },
  {
    label: 'UCSF Card',
    content: <WorkTile linkUrl="/work/ucsfmc" image="/images/thumb-ucsfmc.jpg" projectName="UCSF Medical Center" />,
    topOffset: '0',
    bottomOffset: '20%'
  }
];

const SelectedWork = (props) => {
  return (
    <div>
      <Row>
        <WorkTile
          linkUrl="/work/sortoe"
          image="/images/thumb-sortoe.jpg"
          projectName="SORT-OE"
          role="UX, UI, Frontend Dev"
          description="Understanding international relations through data"
        />
        <WorkTile
          linkUrl="/work/earbits"
          image="/images/thumb-earbits.jpg"
          projectName="Earbits"
          role="UX, UI, Frontend Dev"
          description="Streaming online radio created by and for artists"
        />
        <WorkTile
          linkUrl="/biketour2018"
          image="/images/thumb-biketour.jpg"
          projectName="2018 Bike Tour"
          role="UX, UI, Frontend Dev"
          description="Prototype app for multi-day bike tour routing and updates"
        />
        <WorkTile
          linkUrl="/work/ucsfmc"
          image="/images/thumb-ucsfmc.jpg"
          projectName="UCSF Medical Center"
          role="UX, UI"
          description="Announcement of a new campus for UCSF Medical Center"
        />
      </Row>
    </div>
  );
};

export default SelectedWork;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;
  margin-top: 20px;

  & > div {
    margin-bottom: 20px;
  }
`;
const Cell = styled.div`
  flex: 1 1 50%;
  }
`;
