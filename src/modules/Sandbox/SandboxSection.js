import React, { Component } from 'react';
import styled from 'styled-components';

class SandboxSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  componentDidMount() {
    this.setState({ isActive: this.props.isActive });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isActive !== nextProps.isActive) {
      this.setState({ isActive: nextProps.isActive });
    }
  }

  render() {
    const { isActive } = this.state;
    return (
      <div ref={ this.props.innerRef }>
        <Container isActive={ isActive }>
          <Title isActive={ isActive }>Hello I am a title</Title>
          <Subtitle isActive={ isActive }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel aliquet purus, sed finibus nibh. Integer ultricies lobortis turpis, ut pulvinar nisi pellentesque sed. Aenean eget ante aliquam, vestibulum dolor ac, pellentesque enim. Quisque euismod tellus eu tellus aliquet, et elementum nisl bibendum.
          </Subtitle>
          <Subtitle isActive={ isActive }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel aliquet purus, sed finibus nibh. Integer ultricies lobortis turpis, ut pulvinar nisi pellentesque sed. Aenean eget ante aliquam, vestibulum dolor ac, pellentesque enim. Quisque euismod tellus eu tellus aliquet, et elementum nisl bibendum.
          </Subtitle>
          <Subtitle isActive={ isActive }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel aliquet purus, sed finibus nibh. Integer ultricies lobortis turpis, ut pulvinar nisi pellentesque sed. Aenean eget ante aliquam, vestibulum dolor ac, pellentesque enim. Quisque euismod tellus eu tellus aliquet, et elementum nisl bibendum.
          </Subtitle>
        </Container>
      </div>
    );
  }
}

export default SandboxSection;

const Container = styled.div`
  margin-bottom: 500px;
`;
const AnimateText = styled.div`
  will-change: transform, opacity;
  opacity: ${props => props.isActive ? 1 : 0};
  transform: ${props => props.isActive
    ? 'translate(0px, 0px)'
    : 'translate(0px, 60px)'
  };
  transition: ${props => props.isActive
    ? 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s'
    : 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 1s cubic-bezier(0.42, 0, 0.58, 1) 0s'
  };
`;
const Title = AnimateText.extend`
  font-size: 25px;
`;
const Subtitle = AnimateText.extend`
  font-size: 15px;
`;
