import axios from "axios";
import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_DETAIL_REQUEST,
    CATEGORY_DETAIL_SUCCESS,
    CATEGORY_DETAIL_FAIL,
} from "../constants/categoryConstants";

import { tokenConfig } from "./tokenConfig";

export const getCategories = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_LIST_REQUEST,
        });
        const token = await tokenConfig(getState);
        const { data } = await axios.get(
            "https://delilahrestoapp.herokuapp.com/api/categories",
            token
        );
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: {
                message: error.response.data,
                status: error.response.data.status,
            },
        });
    }
};

export const getCategoryById = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_DETAIL_REQUEST,
        });

        const token = await tokenConfig(getState);
        const { data } = await axios.get(
            `https://delilahrestoapp.herokuapp.com/api/categories/${id}`,
            token
        );
        dispatch({
            type: CATEGORY_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_DETAIL_FAIL,
            payload: error.response,
        });
        console.log(error.response);
    }
};
