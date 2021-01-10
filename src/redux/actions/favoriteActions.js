import * as types from "../constants/favoriteConstants";
import * as favoriteApi from "../../api/favoritesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadFavoritesSuccess(favorites) {
    return { type: types.LOAD_FAV_LIST_SUCCESS, favorites };
}

export function addFavoriteOptimistic(product_id) {
    return { type: types.ADD_FAV_OPTIMISTIC, product_id };
}

export function deleteFavoriteOptimistic(product_id) {
    return { type: types.DELETE_FAV_OPTIMISTIC, product_id };
}

export const loadFavorites = () => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await favoriteApi.getFavorites(getState);
        // const favoritesArray = response.data.data.products;
        // const productsId = favoritesArray.map((p) => p.product_id);
        const favorites = response.data.data.products;
        debugger;
        return dispatch(loadFavoritesSuccess(favorites));
    } catch (error) {
        console.log(error.response);
        dispatch(apiCallError(error));
    }
};

export const deleteFavorite = (product_id) => async (dispatch, getState) => {
    try {
        dispatch(deleteFavoriteOptimistic(product_id));
        return favoriteApi.removeFavorite(getState, product_id);
    } catch (error) {
        console.log(error.response);
    }
};

export const addFavorite = (product_id) => async (dispatch, getState) => {
    try {
        dispatch(addFavoriteOptimistic(product_id));
        return favoriteApi.saveFavorite(getState, product_id);
    } catch (error) {
        console.log(error.response);
    }
};
