import { combineReducers } from 'redux';
//reducers
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
})
