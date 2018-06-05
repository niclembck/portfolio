import React from 'react';
import styled from 'styled-components';

const Mountains = (props) => {
  return (
    <Container>
      <Snow />
      <Mountain />
    </Container>
  );
};

export default Mountains

const lineWidth = '2px';
const lineColor = '#333';

const Container = styled.div`
  position: relative;
`;
const Mountain = styled.div`
  background-color: ${lineColor};
  width: ${lineWidth};
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(20deg);
  transform-origin: 0 0;

  &:after {
    content: '';
    background-color: ${lineColor};
    width: ${lineWidth};
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(-50deg);
    transform-origin: 0 0;
  }
`;
const Snow = styled.div`

`;
