import * as types from "../constants/apiStatusConstants";
import initialState from "./initialState";

//helper function
//does it ends in '_SUCCESS' ?
function actionTypeEndInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
    state = initialState.apiCallsInProgress,
    action
) {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if (
        action.type === types.API_CALL_ERROR ||
        actionTypeEndInSuccess(action.type)
    ) {
        return state - 1;
    }

    return state;
}
