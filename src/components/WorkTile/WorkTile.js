import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WorkTile = (props) => {
  return (
    <Container>
      <ImageContainer to={ props.linkUrl }>
        <img src={ props.image } />
      </ImageContainer>
      <TextContainer>
        <Name to={ props.linkUrl }>{ props.projectName }</Name>
        <p>{ props.description }</p>
        <Roles>{ props.role }</Roles>
      </TextContainer>
    </Container>
  );
};

export default WorkTile;

const tileSize = '250px';

const Container = styled.div`
  width: ${tileSize};
  box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
`;
const ImageContainer = styled(Link)`
  display: block;
  height: ${tileSize};
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  padding: 15px;

  p {
    margin: 10px 0;
  }
`;
const Name = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  color: #000;
`;
const Roles = styled.div`
  color: #777;
  font-size: 14px;
`;
