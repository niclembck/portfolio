import { stravaDomainTypes } from '../actions/strava.actions';

export const INITIAL_STATE = {
  data: [],
  isFetching: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case stravaDomainTypes.SET_ACTIVITY_LIST:
      return {
        ...state,
        data: action.payload
      };
    case stravaDomainTypes.ACTIVITY_LIST_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
}
