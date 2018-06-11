import React from 'react';
import styled from 'styled-components';

import Tool from './Tool';

const ToolList = (props) => {
  return (
    <Container>
      <HeaderBreak>
        <p style={{ marginRight: 10 }}>I enjoy building with</p>
      </HeaderBreak>
      <Tool name="Javascript" />
      <Tool name="React" />
      <Tool name="CSS" />
      <Tool name="HTML" />
      <Tool name="Adobe CS" />
      <Tool name="Git" noBorder />
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
