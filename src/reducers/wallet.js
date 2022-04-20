import {
  API_REQUEST_NO_USDT,
  GET_CURRENCIES,
  ADD_EXPENSE,
  GET_EXPENSE_EDIT,
  SET_EXPENSE_EDIT,
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
  case GET_EXPENSE_EDIT:
    return { ...state, indexExpenseEdit: action.indexExp };
  case SET_EXPENSE_EDIT:
    return { ...state, expenses: [...action.expense], indexExpenseEdit: undefined };
  case REMOVE_EXPENSE:
    return { ...state, expenses: state.expenses.filter(({ id }) => id !== action.id) };
  default:
    return state;
  }
};
