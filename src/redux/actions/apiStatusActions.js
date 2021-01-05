import * as types from "../constants/apiStatusConstants";

export function beginApiCall() {
    return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
    return { type: types.API_CALL_ERROR };
}
