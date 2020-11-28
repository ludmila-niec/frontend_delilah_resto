import axios from "axios";
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
        console.log(data);
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: FAV_LIST_FAIL,
            payload: error.response,
        });
    }
};

export const addFavorite = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAV_ADD_REQUEST,
        });
        //obtener token del login
        const token = await tokenConfig(getState);
        //request body
        //axios directamente hace el parse a stringify
        const body = { product_id: id };
        const { data } = await axios.post(
            "https://delilahrestoapp.herokuapp.com/api/favourites",
            body,
            token
        );

        dispatch({
            type: FAV_ADD_SUCCESS,
            payload: data,
        });
        console.log(data);
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: FAV_ADD_FAIL,
            payload: error.response,
        });
    }
};

export const deleteFavorite = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAV_DELETE_REQUEST,
        });
        //obtener token del login
        const token = await tokenConfig(getState);
        //request body
        //axios directamente hace el parse a stringify
        const { data } = await axios.delete(
            `https://delilahrestoapp.herokuapp.com/api/favourites/${id}`,
            token
        );

        dispatch({
            type: FAV_DELETE_SUCCESS,
            payload: data,
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
