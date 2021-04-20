import * as types from "../constants/userConstants";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function registerNewUserSuccess(user) {
  return { type: types.USER_REGISTER_SUCCESS, user };
}

export function registerNewUserFail(error) {
  return { type: types.USER_REGISTER_FAIL, error };
}

export function loginUserSuccess(user, token) {
  return { type: types.USER_LOGIN_SUCCESS, user, token };
}

export function loginUserFail(error) {
  return { type: types.USER_LOGIN_FAIL, error };
}

export const registerNewUser = (body) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    const response = await userApi.registerUser(body);
    const user = response.data.data;
    dispatch(registerNewUserSuccess(user));
  } catch (error) {
    dispatch(apiCallError(error));
    dispatch(registerNewUserFail(error.response.data.message));
    console.log(error.response);
  }
};

export const loginUser = (body) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    const response = await userApi.loginUser(body);
    const { user, token } = response.data;
    dispatch(loginUserSuccess(user, token));
  } catch (error) {
    dispatch(apiCallError(error));
    dispatch(loginUserFail(error.response.data.message));
    console.log(error.response);
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: types.USER_LOGOUT });
};
