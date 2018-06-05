import React from 'react';
import styled from 'styled-components';

import DynamicWaypoints from '../DynamicWaypoints/DynamicWaypoints';
import Tool from './Tool';

const header = [
  {
    label: 'Header',
    content: <p style={{ marginRight: 15 }}>Proficient In:</p>,
    topOffset: '0',
    bottomOffset: '0%'
  }
];
const javascript = [
  {
    label: 'Javascript',
    content: <Tool name="Javascript" />,
    topOffset: '0',
    bottomOffset: '5%'
  }
];
const react = [
  {
    label: 'React',
    content: <Tool name="React" />,
    topOffset: '0',
    bottomOffset: '7%'
  }
];
const css = [
  {
    label: 'CSS',
    content: <Tool name="CSS" />,
    topOffset: '0',
    bottomOffset: '9%'
  }
];
const html = [
  {
    label: 'HTML',
    content: <Tool name="HTML" />,
    topOffset: '0',
    bottomOffset: '11%'
  }
];
const adobe = [
  {
    label: 'Adobe CS',
    content: <Tool name="Adobe CS" />,
    topOffset: '0',
    bottomOffset: '13%'
  }
];
const git = [
  {
    label: 'Git',
    content: <Tool name="Git" noBorder />,
    topOffset: '0',
    bottomOffset: '14%'
  },
];

const ToolList = (props) => {
  return (
    <Container>
      <HeaderBreak>
        <DynamicWaypoints data={ header } />
      </HeaderBreak>
      <DynamicWaypoints data={ javascript } />
      <DynamicWaypoints data={ react } />
      <DynamicWaypoints data={ css } />
      <DynamicWaypoints data={ html } />
      <DynamicWaypoints data={ adobe } />
      <DynamicWaypoints data={ git } />
    </Container>
  );
};

export default ToolList;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
`;
const HeaderBreak = styled.div`
  @media (max-width : 480px) {
    flex: 1;
  }
`;
