import * as types from "../constants/userConstants";
import initialState from "./initialState";

export const userRegisterReducer = (state = initialState.userInfo, action) => {
    switch (action.type) {
        case types.USER_REGISTER_SUCCESS:
            return state;
        default:
            return state;
    }
};

export const userLoginReducer = (state = initialState.userInfo, action) => {
    switch (action.type) {
        case types.USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.user };
        case types.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
