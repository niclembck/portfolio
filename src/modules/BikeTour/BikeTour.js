import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';

import { fetchActivityList } from '../../actions/strava.actions';
import { getActivityList } from '../../selectors/strava.selectors';

import DynamicWaypoints from '../../components/DynamicWaypoints/DynamicWaypoints';
import TourSection from './TourSection';
import Accordion from './Accordion';

import scServices from './data/scServices.json';
import day1 from './data/day1.json';
import plannedTourData from './data/plannedTourData';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';

const { CenteredContent, FullBleed } = LayoutStyles;

const sectionMap = [
  {
    label: 'Intro Header',
    content: <h1>July 2018 Bike Tour: PDX to LAX</h1>,
    topOffset: '50px',
    bottomOffset: '0%'
  },
  {
    label: 'Subtitle',
    content: <h4 style={{ color: '#054f94', marginBottom: 30 }}>Riding through the mountains and deserts of Oregon and California</h4>,
    topOffset: '50px',
    bottomOffset: 0
  }
];

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibmljbGVtYmNrIiwiYSI6ImNqaXdhcmZmeTA3eTAzcG1vMTF3Y28zNnEifQ.ryovh1VEY7DOK3p0FrtHFA',
  scrollZoom: false
});

class BikeTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourActivities: [],
      isLoading: true
    };
  }

  componentWillMount() {
    this.props.fetchActivityList();
    this.setState({ tourActivities: this.props.activityList });
  }

  componentDidUpdate(nextProps) {
    if (this.props.activityList !== nextProps.activityList) {
      // Check to make sure it is an activity from this year
      const currentYearActivities = _.filter(this.props.activityList, a => {
        return _.includes(a.start_date, 2018);
      });
      // Filter for activities from the tour
      const tourActivities = _.reverse(_.filter(currentYearActivities, a => {
        return _.includes(a.name,'Tour');
      }));
      this.setState({ tourActivities });
    }
  }

  renderTourSection(activities) {
    return _.map(activities, (a, idx) => {
      const realTourData = _.filter(this.state.tourActivities, r => {
        return _.includes(r.name, a.id);
      });
      return (
        <div style={{ padding: '20px 0', borderBottom: '1px solid #d0d0d0' }}>
          <TourSection
            plannedData={ a.plannedRouteData }
            realData={ realTourData }
            title={ a.title }
            center={ a.center }
            key={ idx }
          />
        </div>
      );
    });
  }

  render() {
    const accordionData = _.map(plannedTourData, a => {
      const realTourData = _.filter(this.state.tourActivities, r => {
        return _.includes(r.name, a.id);
      });
      return {
        plannedData: a,
        realData: realTourData
      };
    });

    { this.state.isLoading && <div>Loading</div> }
    return (
      <div>
        <MapContainer>
          <Map
            style="mapbox://styles/niclembck/cjiwavesh9ggs2rl0vk8h2jkb"
            center={ [-123.080312, 41.003205] }
            containerStyle={{ width: '100%', height: '100%' }}
            scrollZoom={ false }
            zoom={ [5] }
          >
            <ZoomControl />
          </Map>
        </MapContainer>
        <CenteredContent>
          <DynamicWaypoints data={ sectionMap } />
          <Accordion data={ accordionData } />
        </CenteredContent>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const activityList = getActivityList(state);
  return {
    activityList,
    isFetching: state.domain.strava.activityList.isFetching
  }
}

export default connect(
  mapStateToProps,
  {
    fetchActivityList
  })(BikeTour);

const MapContainer = styled.div`
  width: 100%;
  height: 70vh;

  @media(max-width : 480px) {
    height: 50vh;
  }
`;
