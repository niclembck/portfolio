import React, { Component } from 'react';
import _ from 'lodash';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import AnimateContainer from '../../components/AnimateContainer/AnimateContainer';
import Hero from '../../components/Hero/Hero';

const sectionMap = [
  {
    label: 'Intro Header',
    content: <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <h1>Sandbox</h1>
              </div>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Intro Subheader',
    content: <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <h3>My name is Nic Lembck and I am a UX designer and front-end engineer.</h3>
              </div>,
    topOffset: '50px',
    bottomOffset: '20%'
  },
  {
    label: 'Intro Subheader',
    content: <p style={{ maxWidth: 900, margin: '0 auto 100px auto', paddingRight: 100 }}>
                I have spent the last 10+ years of my professional life honing the creative skills needed to plan, design, develop and maintain a variety of websites, applications, brands and experiences. With a wealth of experience in both print and digital design, I provide a full spectrum of services to help the needs of both individuals and companies, be they large or small.
              </p>,
    topOffset: '50px',
    bottomOffset: '25%'
  }
];

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: [],
      previousSection: []
    }
  }

  handleEnter(id, e) {
    let filteredArray = this.state.previousSection.filter(item => item !== id)
    this.setState({
      activeSection: [...this.state.activeSection, id],
      previousSection: filteredArray
    });
  }

  handleLeave(id, e) {
    let filteredArray = this.state.activeSection.filter(item => item !== id)
    this.setState({ activeSection: filteredArray });
    if (e.currentPosition === 'above') {
      this.setState({ previousSection: [ ...this.state.previousSection, id] });
    }
  }

  renderSections(sectionMap) {
    return _.map(sectionMap, (section, index) => {
      return (
        <Waypoint
          onEnter={ this.handleEnter.bind(this, index) }
          onLeave={ this.handleLeave.bind(this, index) }
          topOffset={ section.topOffset || 0 }
          bottomOffset={ section.bottomOffset || 0 }
          key={ index }
        >
          <AnimateContainer
            isActive={ _.includes(this.state.activeSection, index) }
            isPrevious={ _.includes(this.state.previousSection, index) }
          >
            <div>{ section.content }</div>
          </AnimateContainer>
        </Waypoint>
      );
    });
  }

  render() {
    return (
      <Container>
        <Hero />

        { this.renderSections(sectionMap) }

        <div style={{ display: 'flex', margin: '0 auto', width: 900, paddingBottom: 100 }}>
          <Waypoint
            onEnter={ this.handleEnter.bind(this, 4) }
            onLeave={ this.handleLeave.bind(this, 4) }
            topOffset="110px"
            bottomOffset="20%"
          >
            <AnimateContainer
              isActive={ _.includes(this.state.activeSection, 4) }
              isPrevious={ _.includes(this.state.previousSection, 4) }
            >
              <CardImage src="http://niclembck.com/images/mftastycard-1.jpg" />
            </AnimateContainer>
          </Waypoint>
          <Waypoint
            onEnter={ this.handleEnter.bind(this, 5) }
            onLeave={ this.handleLeave.bind(this, 5) }
            topOffset="90px"
            bottomOffset="25%"
          >
            <AnimateContainer
              isActive={ _.includes(this.state.activeSection, 5) }
              isPrevious={ _.includes(this.state.previousSection, 5) }
            >
              <CardImage src="http://niclembck.com/images/mftastycard-2.jpg" />
            </AnimateContainer>
          </Waypoint>
        </div>

      </Container>
    );
  }
};

export default Sandbox;

const Container = styled.div`
  flex: 1;
`;
const CardImage = styled.img`
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  margin: 10px;
`;
