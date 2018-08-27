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
        <Name>{ props.projectName }</Name>
        <Roles>{ props.role }</Roles>
        <p>{ props.description }</p>
        <Link
          to={ props.linkUrl }
          className="animatedLink blueText"
          style={{ fontWeight: 500, fontSize: 14 }}
        >
          View Project
        </Link>
      </TextContainer>
    </Container>
  );
};

export default WorkTile;

const tileSize = '250px';

const Container = styled.div`
  width: ${tileSize};
  box-shadow: 0 2px 2px rgba(0, 0, 0, .2);

  @media (max-width : 560px) {
    width: 100%;
  }
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
    font-size: 14px;
    font-weight: 300;
    color: #5f5f5f;
  }
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;
const Roles = styled.div`
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 300;
`;
