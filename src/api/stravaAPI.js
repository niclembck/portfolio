import axios from 'axios';
import stravaConfig from '../config/stravaConfig';

const baseUrl = 'https://www.strava.com/api/v3';
const { userId, access_token, clientId, clientSecret } = stravaConfig;

const defaultParams = {
  access_token: access_token,
  per_page: "200",
  client_id: clientId,
  client_secret: clientSecret,
};

export async function getActivities(params = defaultParams) {
  return await axios
    .get(`${baseUrl}/athlete/activities`, {
      params: params
    })
    .then(res => {
      console.log('res', res);
      return res.data
    });
}
