import React, { Component } from 'react';
import styled from 'styled-components';

class AnimateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewState: false
    }
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.setState({ viewState: 'active' });
    } else {
      this.setState({ viewState: 'inactive' });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPrevious) {
      this.setState({ viewState: 'previous' });
    } else if (nextProps.isActive) {
      this.setState({ viewState: 'active' });
    } else {
      this.setState({ viewState: 'inactive' });
    }
  }

  render() {
    return (
      <div ref={ this.props.innerRef}>
        <Container viewState={ this.state.viewState }>
          { this.props.children }
        </Container>
      </div>
    );
  }
}

export default AnimateContainer;

const Container = styled.div`
  will-change: transform, opacity;
  opacity: ${props => props.viewState === 'active' ? 1 : 0};
  transform: ${props => props.viewState === 'active'
    ? 'translate(0px, 0px)'
    : props.viewState === 'previous' ? 'translate(0px, -60px)'
    : 'translate(0px, 60px)'
  };
  transition: ${props => props.viewState === 'active'
    ? 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s'
    : props.viewState === 'previous' ? 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s'
    : 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s'
  };
`;
