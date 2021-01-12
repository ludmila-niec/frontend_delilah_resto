import * as types from "../constants/cartConstants";

//helper function
function setItemsInLocalStorage(product) {
    const { product_id, quantity } = product;
    const cartInLocalStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    const itemInCart = cartInLocalStorage.find(
        (item) => item.product_id === product_id
    );
    if (itemInCart) {
        let tempCart = cartInLocalStorage.map((item) =>
            item.product_id === product_id
                ? {
                      ...item,
                      quantity: item.quantity + quantity,
                  }
                : item
        );

        return localStorage.setItem("cart", JSON.stringify(tempCart));
    } else {
        cartInLocalStorage.push(product);
        return localStorage.setItem("cart", JSON.stringify(cartInLocalStorage));
    }
}

export function addToCartSuccess(product_id, price, quantity) {
    return { type: types.CART_ADD_ITEM, product_id, price, quantity };
}

export function clearCartSuccess() {
    return { type: types.CART_CLEAR_ITEMS };
}

export const addToCart = (product_id, price, quantity) => (dispatch) => {
    const product = { product_id, price, quantity };
    //save cart in localStorage
    setItemsInLocalStorage(product);
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
