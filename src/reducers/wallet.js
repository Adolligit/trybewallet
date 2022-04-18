import {
  API_REQUEST_NO_USDT,
  GET_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_REQUEST_NO_USDT:
    return { ...state, jsonNoUSDT: action.jsonNoUSDT };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
      totalExpenses: state.totalExpenses - action.convertedValue,
    };
  default:
    return state;
  }
};
