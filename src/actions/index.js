import { noUSDT } from '../api/coins';

export const SAVED_EMAIL = 'SAVED_EMAIL';
export const API_REQUEST = 'API_REQUEST';

export const savedEmail = (payload) => ({ type: SAVED_EMAIL, payload });
export const apiResponse = (response) => ({ type: API_REQUEST, response });

export const apiRequest = () => async (dispatch) => {
  const jsonData = await noUSDT();
  const arrData = jsonData.map((acronymCoin) => acronymCoin);

  dispatch(apiResponse(arrData));
};
