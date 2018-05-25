import React, { Component } from 'react';
import _ from 'lodash';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

import AnimateContainer from '../AnimateContainer/AnimateContainer';

class DynamicWaypoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: [],
      previousSection: []
    }
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  handleEnter(id, e) {
    // Check previousSection for item id and remove from that array
    let filteredArray = this.state.previousSection.filter(item => item !== id)
    this.setState({
      activeSection: [...this.state.activeSection, id],
      previousSection: filteredArray
    });
  }

  handleLeave(id, e) {
    // Remove item from activeSection array
    let filteredArray = this.state.activeSection.filter(item => item !== id)
    this.setState({ activeSection: filteredArray });
    if (e.currentPosition === 'above') {
      this.setState({ previousSection: [ ...this.state.previousSection, id] });
    }
  }

  renderWaypoints(waypoints) {
    return _.map(waypoints, (w, index) => {
      return (
        <Waypoint
          onEnter={ this.handleEnter.bind(this, index) }
          onLeave={ this.handleLeave.bind(this, index) }
          topOffset={ w.topOffset || 0 }
          bottomOffset={ w.bottomOffset || 0 }
          key={ index }
        >
          <AnimateContainer
            isActive={ _.includes(this.state.activeSection, index) }
            isPrevious={ _.includes(this.state.previousSection, index) }
            animationOrigin={ w.animationOrigin || 'bottom' }
          >
            { w.content }
          </AnimateContainer>
        </Waypoint>
      );
    });
  }

  render() {
    return (
      <div>{ this.renderWaypoints(this.props.data) }</div>
    );
  }
}

export default DynamicWaypoints;
