import React, { Component } from 'react';
import _ from 'lodash';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import AnimateContainer from '../../components/AnimateContainer/AnimateContainer';
import Hero from '../../components/Hero/Hero';

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

  render() {
    return (
      <Container>
        <Hero>
          <div>Hero</div>
        </Hero>
        <Waypoint
          onEnter={ this.handleEnter.bind(this, 1) }
          onLeave={ this.handleLeave.bind(this, 1) }
          topOffset="50px"
          bottomOffset="25%"
        >
          <AnimateContainer
            isActive={ _.includes(this.state.activeSection, 1) }
            isPrevious={ _.includes(this.state.previousSection, 1) }
          >
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <h1>Hello</h1>
            </div>
          </AnimateContainer>
        </Waypoint>

        <Waypoint
          onEnter={ this.handleEnter.bind(this, 2) }
          onLeave={ this.handleLeave.bind(this, 2) }
          topOffset="50px"
          bottomOffset="25%"
        >
          <AnimateContainer
            isActive={ _.includes(this.state.activeSection, 2) }
            isPrevious={ _.includes(this.state.previousSection, 2) }
          >
            <p style={{ maxWidth: 900, margin: '0 auto 50px auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel aliquet purus, sed finibus nibh. Integer ultricies lobortis turpis, ut pulvinar nisi pellentesque sed. Aenean eget ante aliquam, vestibulum dolor ac, pellentesque enim. Quisque euismod tellus eu tellus aliquet, et elementum nisl bibendum.
            </p>
          </AnimateContainer>
        </Waypoint>

        <Waypoint
          onEnter={ this.handleEnter.bind(this, 3) }
          onLeave={ this.handleLeave.bind(this, 3) }
          topOffset="50px"
          bottomOffset="25%"
        >
          <AnimateContainer
            isActive={ _.includes(this.state.activeSection, 3) }
            isPrevious={ _.includes(this.state.previousSection, 3) }
          >
            <p style={{ maxWidth: 900, margin: '0 auto 100px auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel aliquet purus, sed finibus nibh. Integer ultricies lobortis turpis, ut pulvinar nisi pellentesque sed. Aenean eget ante aliquam, vestibulum dolor ac, pellentesque enim. Quisque euismod tellus eu tellus aliquet, et elementum nisl bibendum.
            </p>
          </AnimateContainer>
        </Waypoint>

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
