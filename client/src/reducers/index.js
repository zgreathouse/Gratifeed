import { combineReducers } from 'redux';

//reducers
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form'; //a special reducer to handle the redux form slice of state
import surveysReducer from './surveysReducer';

//redux state shape
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
