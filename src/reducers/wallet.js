import { API_REQUEST } from '../actions/index';

export default (state = { currencies: [] }, action) => {
  switch (action.type) {
  case API_REQUEST:
    return { currencies: action.response };
  default:
    return state;
  }
};
