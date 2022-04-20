import { noUSDT } from '../api/coins';

export const SAVED_EMAIL = 'SAVED_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const API_REQUEST_NO_USDT = 'API_REQUEST_NO_USDT';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_EXPENSE_EDIT = 'GET_EXPENSE_EDIT';
export const SET_EXPENSE_EDIT = 'SET_EXPENSE_EDIT';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const savedEmail = (payload) => ({ type: SAVED_EMAIL, payload });
export const NoUSDT = (jsonNoUSDT) => ({ type: API_REQUEST_NO_USDT, jsonNoUSDT });
export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });
export const getExpenseEdit = (indexExp) => ({ type: GET_EXPENSE_EDIT, indexExp });
export const setExpenseEdit = (expense) => ({ type: SET_EXPENSE_EDIT, expense });
export const removeExpense = (id, convertedValue) => (
  { type: REMOVE_EXPENSE, id, convertedValue }
);

export const apiRequestWithoutUSDT = () => async (dispatch) => {
  const response = await noUSDT();

  dispatch(NoUSDT(response));
};
