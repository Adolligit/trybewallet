import { noUSDT } from '../api/coins';

export const SAVED_EMAIL = 'SAVED_EMAIL';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const API_REQUEST_NO_USDT = 'API_REQUEST_NO_USDT';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const savedEmail = (payload) => ({ type: SAVED_EMAIL, payload });
export const totalExpense = (unitValue) => ({ type: TOTAL_EXPENSE, unitValue });
export const NoUSDT = (jsonNoUSDT) => ({ type: API_REQUEST_NO_USDT, jsonNoUSDT });
export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });

export const apiRequestWithoutUSDT = () => async (dispatch) => {
  const response = await noUSDT();

  dispatch(NoUSDT(response));
};
