import * as types from "../constants/favoriteConstants";
import initialState from "./initialState";

const favoriteReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case types.LOAD_FAV_LIST_SUCCESS:
            return action.favorites;
        case types.ADD_FAV_OPTIMISTIC:
            return [action.product_id, ...state];
        case types.DELETE_FAV_OPTIMISTIC:
            return state.filter((item) => item !== action.product_id);

        default:
            return state;
    }
};

export default favoriteReducer;
