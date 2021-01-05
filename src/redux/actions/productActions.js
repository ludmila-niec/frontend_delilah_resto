import * as types from "../constants/productConstants";
import * as productApi from "../../api/productsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadProductDetailSuccess(product) {
    return { type: types.PRODUCT_DETAIL_SUCCESS, product };
}

export const loadProductDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const product = await productApi.getProductById(getState, id);
        dispatch(loadProductDetailSuccess(product));
    } catch (error) {
        dispatch(apiCallError(error));
        console.log(error.response);
    }
};
