import {
    FAV_LIST_REQUEST,
    FAV_LIST_SUCCESS,
    FAV_LIST_FAIL,
    FAV_ADD_REQUEST,
    FAV_ADD_SUCCESS,
    FAV_ADD_FAIL,
    FAV_DELETE_REQUEST,
    FAV_DELETE_SUCCESS,
    FAV_DELETE_FAIL,
    FAV_CLEAR_ACTION,
} from "../constants/favoriteConstants";

export const getFavoritesReducer = (state = {}, action) => {
    switch (action.type) {
        case FAV_LIST_REQUEST:
            return { loading: true };
        case FAV_LIST_SUCCESS:
            return { loading: false, favorites: action.payload };
        case FAV_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const addFavoriteReducer = (state = {}, action) => {
    switch (action.type) {
        case FAV_ADD_REQUEST:
            return { loading: true };
        case FAV_ADD_SUCCESS:
            return { loading: false, favorite: action.payload, success: true };
        case FAV_ADD_FAIL:
            return { loading: false, error: action.payload };
        case FAV_CLEAR_ACTION:
            return {};
        default:
            return state;
    }
};

export const deleteFavoriteReducer = (state = {}, action) => {
    switch (action.type) {
        case FAV_DELETE_REQUEST:
            return { loading: true };
        case FAV_DELETE_SUCCESS:
            return { loading: false, success: true };
        case FAV_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case FAV_CLEAR_ACTION:
            return {};
        default:
            return state;
    }
};
