import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Footer = (props) => {
  const linkMap = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nic-lembck-3461ab8a/',
      icon: 'fab fa-linkedin-in'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/northforkhome',
      icon: 'fab fa-instagram'
    },
    {
      label: 'Bandcamp',
      url: 'https://northforkhome.bandcamp.com/',
      icon: 'fab fa-bandcamp'
    }
  ];

  const renderSocialLinks = (links) => {
    return _.map(links, link => {
      return (
        <IconLinkContainer label={ link.label }>
          <IconLink
            href={ link.url }
            target="_blank"
            className={ link.icon }
          />
        </IconLinkContainer>
      );
    });
  };

  return (
    <Container>
      <FooterContent>
        <Name>Nic Lembck</Name>
        <Title>UI UX Design</Title>
        <IconRow>
          { renderSocialLinks(linkMap) }
        </IconRow>
      </FooterContent>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #1d1d1d;
  position: relative;
  z-index: 1;
  color: #fff;
`;
const FooterContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
`;
const Name = styled.div`
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1.2;
  text-transform: uppercase;
`;
const Title = styled.div`
  font-size: 18px;
  opacity: .8;
  font-weight: 300;
`;
const IconRow = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto 0;
  list-style: none;
  padding: 0;

  &:hover {
    li:not(:hover) {
      opacity: .4;
    }
  }
`;
const IconLinkContainer = styled.li`
  position: relative;
  cursor: pointer;
  list-style: none;
  padding: 0 15px;
  opacity: .8;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:before {
    content: "${props => props.label}";
    font-weight: 300;
    text-transform: uppercase;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%, -100%);
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    opacity: 1;

    &:before {
      visibility: visible;
      opacity: 1;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    }
  }
`;
const IconLink = styled.a`
  font-size: 25px;
  color: #fff;
  text-decoration: none;
`;
