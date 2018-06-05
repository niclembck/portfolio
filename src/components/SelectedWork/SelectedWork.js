import React from 'react';
import styled from 'styled-components';

import DynamicWaypoints from '../DynamicWaypoints/DynamicWaypoints';
import CardLink from '../CardLink/CardLink';

const test1 = [
  {
    label: 'Earbits Card',
    content: <CardLink image="http://niclembck.com/images/thumb-earbits.jpg" link="work/earbits" title="Earbits Radio" />,
    topOffset: '0',
    bottomOffset: '18%',
    animationOrigin: 'left'
  }
];
const test2 = [
  {
    label: 'Illustration Card',
    content: <CardLink image="http://niclembck.com/images/thumb-doodles.jpg" link="work/illustrations" title="Illustrations" />,
    topOffset: '0',
    bottomOffset: '20%',
    animationOrigin: 'right'
  }
];
const test3 = [
  {
    label: 'Johnson & Johnson Card',
    content: <CardLink image="http://niclembck.com/images/thumb-jnj-natural.jpg" link="/" title="Johnson's Natural" />,
    topOffset: '0',
    bottomOffset: '18%',
    animationOrigin: 'left'
  }
];
const test4 = [
  {
    label: 'UCSF Card',
    content: <CardLink image="http://niclembck.com/images/thumb-ucsfmc.jpg" link="/" title="UCSF Medical Center" />,
    topOffset: '0',
    bottomOffset: '20%',
    animationOrigin: 'right'
  }
];

const SelectedWork = (props) => {
  return (
    <div>
      <h1>Selected Work</h1>
      <Row>
        <DynamicWaypoints data={ test1 } />
        <DynamicWaypoints data={ test2 } />
      </Row>
       <Row>
        <DynamicWaypoints data={ test3 } />
        <DynamicWaypoints data={ test4 } />
      </Row>
    </div>
  );
};

export default SelectedWork;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
