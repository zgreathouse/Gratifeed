import { FETCH_USER } from '../actions/types';

//Reducer for auth slice of state (see reducers/index.js)
export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
