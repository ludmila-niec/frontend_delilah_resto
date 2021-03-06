import * as types from "../constants/userConstants";
import initialState from "./initialState";

export const userRegisterReducer = (
    state = initialState.userRegister,
    action
) => {
    switch (action.type) {
        case types.USER_REGISTER_SUCCESS:
            return { ...state, data: action.user, error: "" };
        case types.USER_REGISTER_FAIL:
            return { ...state, data: null, error: action.error };
        default:
            return state;
    }
};

export const userLoginReducer = (state = initialState.userLogin, action) => {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                token: action.token,
                error: "",
            };
        case types.USER_LOGIN_FAIL:
            return { ...state, user: null, token: null, error: action.error };
        case types.USER_LOGOUT:
            return { ...state, user: null, token: null, error: "" };
        default:
            return state;
    }
};
