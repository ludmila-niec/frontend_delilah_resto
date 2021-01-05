import * as types from "../constants/cartConstants";

export const addToCart = (product, quantity) => (dispatch) => {
    dispatch({
        type: types.CART_ADD_ITEM,
        payload: { product: product, quantity: quantity },
    });
};

export const increaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_INCREASE_ITEM,
        payload: product_id,
    });
};
export const decreaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_DECREASE_ITEM,
        payload: product_id,
    });
};
export const removeItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        payload: product_id,
    });
};
export const clearCart = () => (dispatch) => {
    dispatch({
        type: types.CART_CLEAR_ITEMS,
    });
};

export const getTotal = () => (dispatch) => {
    dispatch({
        type: types.CART_GET_TOTAL,
    });
};
