import * as types from "../constants/favoriteConstants";
import * as favoriteApi from "../../api/favoritesApi";
import * as productApi from "../../api/productsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadFavoritesSuccess(favorites) {
    return { type: types.LOAD_FAV_LIST_SUCCESS, favorites };
}

export function addFavoriteSuccess(favorite) {
    return { type: types.ADD_FAV_SUCCESS, favorite };
}

export function deleteFavoriteOptimistic(favorite_id) {
    return { type: types.DELETE_FAV_OPTIMISTIC, favorite_id };
}

export const loadFavorites = () => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await favoriteApi.getFavorites(getState);
        const favorites = response.data.data.products;
        return dispatch(loadFavoritesSuccess(favorites));
    } catch (error) {
        console.log(error.response);
        dispatch(apiCallError(error));
    }
};

//future => add optimistic
export const addFavorite = (product_id) => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        await favoriteApi.saveFavorite(getState, product_id);
        const fetchFavorite = await productApi.getProductById(product_id);
        const productData = fetchFavorite.data;
        console.log(productData);
        return dispatch(addFavoriteSuccess(productData));
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
        dispatch(apiCallError(error));
    }
};

// export const clearFavAction = () => {
//     return {
//         type: FAV_CLEAR_ACTION,
//     };
// };
