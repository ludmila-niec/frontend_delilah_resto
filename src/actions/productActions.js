import axios from "axios";
import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";
import { tokenConfig } from "./tokenConfig";

export const getProductDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DETAIL_REQUEST,
        });

        const token = await tokenConfig(getState);
        const { data } = await axios.get(
            `https://delilahrestoapp.herokuapp.com/api/products/${id}`,
            token
        );

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response,
        });
        console.log(error.response);
    }
};
