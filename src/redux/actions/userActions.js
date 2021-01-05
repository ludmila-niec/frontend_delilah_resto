import * as types from "../constants/userConstants";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function registerNewUserSuccess() {
    return { type: types.USER_REGISTER_SUCCESS };
}

export function loginUserSuccess(user) {
    return { type: types.USER_LOGIN_SUCCESS, user };
}

export const registerNewUser = (body) => async (dispatch) => {
    try {
        dispatch(beginApiCall());
        await userApi.registerUser(body);
        return dispatch(registerNewUserSuccess());
    } catch (error) {
        dispatch(apiCallError(error));
        console.log(error.response);
    }
};

export const loginUser = (body) => async (dispatch) => {
    try {
        dispatch(beginApiCall());
        const user = await dispatch(userApi.loginUser(body));
        dispatch(loginUserSuccess(user));
    } catch (error) {
        dispatch(apiCallError(error));
        console.log(error.response);
    }
};
