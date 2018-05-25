import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = (props) => {
  return (
    <Card to={ props.link }>
      <img src={ props.image } />
    </Card>
  );
};

export default CardLink;

const Card = styled(Link)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
  display: block;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
