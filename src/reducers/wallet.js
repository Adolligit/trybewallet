import {
  API_REQUEST_NO_USDT,
  GET_CURRENCIES,
  ADD_EXPENSE,
  TOTAL_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_REQUEST_NO_USDT:
    return { ...state, jsonNoUSDT: action.jsonNoUSDT };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case TOTAL_EXPENSE:
    return {
      ...state,
      totalExpenses: state.totalExpenses + action.unitValue,
    };
  default:
    return state;
  }
};
