import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import { fetchActivityList } from '../../actions/strava.actions';
import { getActivityList } from '../../selectors/strava.selectors';

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
    this.setState({ tourActivities: this.props.activityList});
  }

  render() {
    console.log('this.state', this.state);
    console.log('this.props', this.props);
    return (
      <div>
        Tour page
      </div>
    );
  }
};

function mapStateToProps(state) {
  const activityList = getActivityList(state);
  return { activityList }
}

export default connect(mapStateToProps, { fetchActivityList })(BikeTour);
