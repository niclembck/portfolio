import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import polyline from 'polyline';

import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';

import day1 from './data/day1.json';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibmljbGVtYmNrIiwiYSI6ImNqaXdhcmZmeTA3eTAzcG1vMTF3Y28zNnEifQ.ryovh1VEY7DOK3p0FrtHFA'
});

class TourSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realCoords: []
    };
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps && !_.isEmpty(nextProps.realData)) {
      const realCoords = polyline.decode(nextProps.realData[0].map.summary_polyline);
      const switchedCoords = _.map(realCoords, r => _.reverse(r));
      this.setState({ realCoords: switchedCoords });
    }
  }
  render() {
    const {
      plannedData,
      realData,
      title,
      center
    } = this.props;

    return (
      <div>
        <Row>
          <div>
            <MapContainer>
              <Map
                style="mapbox://styles/niclembck/cjj09kdq40cx12sqtoz209we2"
                center={ center }
                containerStyle={{ width: '100%', height: '100%' }}
                zoom={ [7] }
              >
                <ZoomControl />
                <Layer
                  type="line"
                  layout={{
                    'line-cap': 'round',
                    'line-join': 'round'
                  }}
                  paint={{
                    'line-color': '#3271ad',
                    'line-width': 8
                  }}
                >
                  <Feature coordinates={ plannedData.features[0].geometry.coordinates } />
                </Layer>
                <Layer
                  type="line"
                  layout={{
                    'line-cap': 'round',
                    'line-join': 'round'
                  }}
                  paint={{
                    'line-color': '#e85a1d',
                    'line-width': 2
                  }}
                >
                  <Feature coordinates={ this.state.realCoords } />
                </Layer>
              </Map>
            </MapContainer>
            <div style={{ display: 'flex' }}>
              <Legend>
                <LegendBox realData />
                <div>Actual Ride</div>
              </Legend>
              <Legend>
                <LegendBox />
                <div>Projected Ride</div>
              </Legend>
            </div>
          </div>
          <RightColumn>
            { !_.isEmpty(realData)
              ? <div>
                  { realData[0].name }
                  <br />Distance: { _.round(realData[0].distance / 1609.344, 1) } miles
                  <br />Elevation Gain: { _.round(realData[0].total_elevation_gain * 3.28) } feet
                  <br />{ realData[0].description }
                </div>
              : <div>I haven't ridden this part yet</div>
            }
          </RightColumn>
        </Row>
      </div>
    );
  }
};

export default TourSection;

const Row = styled.div`
  display: flex;

  @media(max-width : 480px) {
    display: block;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  padding: 0 20px;
`;
const MapContainer = styled.div`
  width: 300px;
  height: 300px;

  @media(max-width : 480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const Legend = styled.div`
  display: flex;
  align-items: center;
  margin: 5px  10px 0 0;
  font-size: 14px;
`;
const LegendBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border: 1px solid #d0d0d0;
  box-shadow: inset 0 0 0 1px #fff;
  background-color: ${props => props.realData ? '#e85a1d' : '#3271ad'};
`;
