import * as types from "../constants/productConstants";
import * as productApi from "../../api/productsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadProductSuccess(products) {
    return { type: types.LOAD_PRODUCTS_LIST_SUCCESS, products };
}
export function loadProductDetailSuccess(product) {
    return { type: types.PRODUCT_DETAIL_SUCCESS, product };
}

export const loadProducts = () => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await productApi.getProducts(getState);
        const products = response.data.data;
        dispatch(loadProductSuccess(products));
    } catch (error) {
        dispatch(apiCallError(error.response));
        console.log(error.reponse);
    }
};

export const loadProductDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await productApi.getProductById(getState, id);
        const product = response.data.data;
        dispatch(loadProductDetailSuccess(product));
    } catch (error) {
        dispatch(apiCallError(error));
        console.log(error.response);
    }
};
