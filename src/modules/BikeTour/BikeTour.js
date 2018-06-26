import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import { fetchActivityList } from '../../actions/strava.actions';
import { getActivityList } from '../../selectors/strava.selectors';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';

const { CenteredContent } = LayoutStyles;

// const baseUrl = 'https://www.strava.com/api/v3';
// const { userId, access_token, clientId, clientSecret } = stravaConfig;

class BikeTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourActivities: []
    };
  }

  componentWillMount() {
    this.props.fetchActivityList();
    this.setState({ tourActivities: this.props.activityList });
  }

  componentDidUpdate(nextProps) {
    console.log('next', nextProps);
    if (this.props.activityList !== nextProps.activityList) {
      const tourActivities = _.filter(this.props.activityList, a => {
        return _.includes(a.name,'Tour');
      });
      this.setState({ tourActivities });
    }
  }

  render() {
    return (
      <div>
        <HeroContainer backgroundImage="/images/bikeTourHero.jpg" />
        <CenteredContent>
          {
            _.map(this.state.tourActivities, activity => <div>{ activity.name }<br />{ activity.description }</div>)
          }
        </CenteredContent>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const activityList = getActivityList(state);
  return { activityList }
}

export default connect(
  mapStateToProps,
  {
    fetchActivityList
  })(BikeTour);
