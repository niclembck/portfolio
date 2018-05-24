import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <Container>
      <FooterContent>
        Blorp
      </FooterContent>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #d0d0d0;
  position: relative;
  z-index: 1;
`;
const FooterContent = styled.div`
  width: 100%;
  height: 400px
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
