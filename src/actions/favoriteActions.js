import axios from "axios";
import {
    FAV_LIST_REQUEST,
    FAV_LIST_SUCCESS,
    FAV_LIST_FAIL,
    FAV_LIST_ADDED,
    FAV_LIST_REMOVED,
    FAV_ADD_REQUEST,
    FAV_ADD_SUCCESS,
    FAV_ADD_FAIL,
    FAV_DELETE_REQUEST,
    FAV_DELETE_SUCCESS,
    FAV_DELETE_FAIL,
    FAV_CLEAR_ACTION,
} from "../constants/favoriteConstants";

import { tokenConfig } from "./tokenConfig";

export const getFavorites = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAV_LIST_REQUEST,
        });
        //obtener token del login
        const token = await tokenConfig(getState);

        const { data } = await axios.get(
            "https://delilahrestoapp.herokuapp.com/api/favourites",
            token
        );
        dispatch({
            type: FAV_LIST_SUCCESS,
            payload: data.data.products,
        });
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: FAV_LIST_FAIL,
            payload: error.response,
        });
    }
};

export const addFavorite = (product_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAV_ADD_REQUEST,
        });
        //obtener token del login
        const token = await tokenConfig(getState);
        //request body
        console.log("fav action product");
        console.log(product_id);
        //axios directamente hace el parse a stringify
        const body = { product_id: product_id };
        const request = await axios.post(
            "https://delilahrestoapp.herokuapp.com/api/favourites",
            body,
            token
        );

        dispatch({
            type: FAV_ADD_SUCCESS,
        });
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: FAV_ADD_FAIL,
            payload: error.response,
        });
    }
};

export const deleteFavorite = (product_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAV_DELETE_REQUEST,
        });
        //obtener token del login
        const token = await tokenConfig(getState);

        const request = await axios.delete(
            `https://delilahrestoapp.herokuapp.com/api/favourites/${product_id}`,
            token
        );

        dispatch({
            type: FAV_DELETE_SUCCESS,
        });
        dispatch({
            type: FAV_LIST_REMOVED,
            payload: product_id,
        });
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: FAV_DELETE_FAIL,
            payload: error.response,
        });
    }
};

export const clearFavAction = () => {
    return {
        type: FAV_CLEAR_ACTION,
    };
};
