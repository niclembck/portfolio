import React from 'react';
import styled from 'styled-components';

const Tool = (props) => {
  return (
    <Container noBorder={ props.noBorder }>
      { props.name }
    </Container>
  );
};

export default Tool;

const Container = styled.p`
  position: relative;
  font-weight: 600;
  margin-right: 10px;
  padding-right: 10px;
  border-right: ${props => props.noBorder ? 'none' : '1px solid #d0d0d0'};
`;
