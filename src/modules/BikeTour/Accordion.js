import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import TourSection from './TourSection';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 0
    };
  }

  handleSectionClick(e) {
    this.setState({  activeSection: e });
  }

  renderAccordionSections(data) {
    return _.map(data, (d, idx) => {
      return (
        <div key={ idx }>
          <SectionHeader onClick={ this.handleSectionClick.bind(this, idx) }>
            <SectionTitle>{ d.plannedData.title }</SectionTitle>
            { idx !== this.state.activeSection &&
              <div>Expand</div>
            }
          </SectionHeader>
          <SectionBody isExpanded={ idx === this.state.activeSection }>
            {
              idx === this.state.activeSection &&
              <TourSection
                plannedData={ d.plannedData.plannedRouteData }
                realData={ d.realData }
                center={ d.plannedData.center }
              />
            }
          </SectionBody>
        </div>
      );
    });
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        { this.renderAccordionSections(this.props.data) }
      </div>
    );
  }
}

export default Accordion;

const SectionHeader = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d0d0d0;
  cursor: pointer;
`;
const SectionTitle = styled.div`
  font-size: 20px;
  flex: 1;
`;
const SectionBody = styled.div`
  padding: ${props => props.isExpanded ? '20px' : '0px'};
  border-bottom: ${props => props.isExpanded ? '1px solid #d0d0d0' : 'none'};
`;
