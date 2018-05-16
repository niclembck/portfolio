import { combineReducers } from 'redux';
import domainTempReducer from './temp.reducer';
export default combineReducers({
  temp: domainTempReducer
});
