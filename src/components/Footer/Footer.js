import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

const Footer = (props) => {
  const linkMap = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nic-lembck-3461ab8a/',
      icon: 'fab fa-linkedin-in',
      color: '#0077b5'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/northforkhome',
      icon: 'fab fa-instagram',
      color: '#d93175'
    },
    {
      label: 'Bandcamp',
      url: 'https://northforkhome.bandcamp.com/',
      icon: 'fab fa-bandcamp',
      color: '#629aa9'
    },
    {
      label: 'Strava',
      url: 'https://www.strava.com/athletes/6164044',
      icon: 'fab fa-strava',
      color: '#fc4c02'
    }
  ];

  const renderSocialLinks = (links) => {
    return _.map(links, link => {
      return (
        <IconLinkContainer
          label={ link.label }
          key={ link.label }
          color={ link.color }
        >
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
        <Name to="/">Nic Lembck</Name>
        <Title>UI UX Design</Title>
        <IconRow>
          { renderSocialLinks(linkMap) }
        </IconRow>
      </FooterContent>
    </Container>
  );
};

export default Footer;

const footerHeight = '350px'

const Container = styled.footer`
  width: 100%;
  height: ${footerHeight};
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
  height: ${footerHeight}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Name = styled(Link)`
  font-size: 30px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 4px;
  text-decoration: none;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  opacity: .65;
  font-weight: 300;
`;
const IconRow = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  border-top: 1px solid #666;
  list-style: none;
  padding: 20px;

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
  margin: 0 15px;
  opacity: .8;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:before {
    content: "${props => props.label}";
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    bottom: -45px;
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

   a {
      color: ${props => props.color};
    }
  }
`;
const IconLink = styled.a`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;
