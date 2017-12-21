import { combineReducers } from 'redux';
//reducers
import { reducer as reduxForm } from 'redux-form'; //reducer is imported from redux-form npm module
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm
})
