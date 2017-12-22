import axios from 'axios';
import { FETCH_USER } from './types';

//action fetches the current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

//action serves up token from stripe to backend api
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}

//action which saves a survey to the database
// export const submitSurvey = values => async disptach => {
//   const res = await axios.post('/api/surveys', values);
//   dispatch({type: , payload: res.values })
// };
