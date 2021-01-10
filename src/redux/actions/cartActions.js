import * as types from "../constants/cartConstants";

export function addToCartSuccess(product_id, price, quantity) {
    return { type: types.CART_ADD_ITEM, product_id, price, quantity };
}

export function clearCartSuccess() {
    debugger;
    return { type: types.CART_CLEAR_ITEMS };
}

export const addToCart = (product_id, price, quantity) => (dispatch) => {
    //save cart items in localStorage
    const product = { product_id, price, quantity };
    const cartInLocalStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    cartInLocalStorage.push(product);
    localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
    dispatch(addToCartSuccess(product_id, price, quantity));
};

export const increaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_INCREASE_ITEM,
        product_id,
    });
    dispatch(getTotal());
};
export const decreaseItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_DECREASE_ITEM,
        product_id,
    });
    dispatch(getTotal());
};
export const removeItem = (product_id) => (dispatch) => {
    dispatch({
        type: types.CART_REMOVE_ITEM,
        product_id,
    });
    dispatch(getTotal());
};
export const clearCart = () => (dispatch) => {
    //empty cart list in localStorage
    localStorage.setItem("cart", JSON.stringify([]));
    dispatch(clearCartSuccess());
};

export const getTotal = () => (dispatch) => {
    dispatch({
        type: types.CART_GET_TOTAL,
    });
};
