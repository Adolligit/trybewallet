import { noUSDT } from '../api/coins';

export const SAVED_EMAIL = 'SAVED_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const API_REQUEST_NO_USDT = 'REQUEST_NO_USDT';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const savedEmail = (payload) => ({ type: SAVED_EMAIL, payload });
export const NoUSDT = (response) => ({ type: API_REQUEST_NO_USDT, response });
export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });

export const apiRequestWithoutUSDT = () => async (dispatch) => {
  const response = await noUSDT();

  dispatch(NoUSDT(response));
};
