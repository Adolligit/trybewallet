import { API_REQUEST_NO_USDT, GET_CURRENCIES, ADD_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_REQUEST_NO_USDT:
    return { ...state, response: action.response };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
};
