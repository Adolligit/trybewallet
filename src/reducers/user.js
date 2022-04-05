import { SAVED_EMAIL } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
  case SAVED_EMAIL:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};
