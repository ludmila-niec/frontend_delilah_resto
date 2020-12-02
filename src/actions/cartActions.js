import {
    CART_ADD_ITEM,
    CART_INCREASE_ITEM,
    CART_DECREASE_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR_ITEMS,
    CART_GET_TOTAL,
} from "../constants/cartConstants";

export const addToCart = (product, quantity) => (dispatch) => {
    dispatch({
        type: CART_ADD_ITEM,
        payload: { product: product, quantity: quantity },
    });
};

export const increaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: CART_INCREASE_ITEM,
        payload: product_id,
    });
};
export const decreaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: CART_DECREASE_ITEM,
        payload: product_id,
    });
};
export const removeItem = (product_id) => (dispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: product_id,
    });
};
export const clearCart = () => (dispatch) => {
    dispatch({
        type: CART_CLEAR_ITEMS,
    });
};

export const getTotal = () => (dispatch) => {
    dispatch({
        type: CART_GET_TOTAL,
    });
};
