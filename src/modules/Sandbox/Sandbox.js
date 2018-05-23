import React, { Component } from 'react';
import _ from 'lodash';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

import SandboxSection from './SandboxSection';

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: [],
      previousSection: []
    }
  }
  handleEnter(id, e) {
    console.log('handleEnter', id, e);
    this.setState({ activeSection: [...this.state.activeSection, id] });
  }

  handleLeave(id, e) {
    console.log('handleLeave', id, e);
    let filteredArray = this.state.activeSection.filter(item => item !== id)
    this.setState({ activeSection: filteredArray, previousSection: id });
  }

  render() {
    return (
      <div style={{ padding: '500px 50px' }}>
        <Waypoint
          onEnter={ this.handleEnter.bind(this, 1) }
          onLeave={ this.handleLeave.bind(this, 1) }
        >
          <SandboxSection isActive={ _.includes(this.state.activeSection, 1) }  />
        </Waypoint>

        <Waypoint
          onEnter={ this.handleEnter.bind(this, 2) }
          onLeave={ this.handleLeave.bind(this, 2) }
        >
          <SandboxSection isActive={ _.includes(this.state.activeSection, 2) } />
        </Waypoint>
      </div>
    );
  }
};

export default Sandbox;

const SectionContainer = styled.div`
  padding: 200px;
`;
