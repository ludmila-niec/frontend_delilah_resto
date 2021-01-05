import * as types from "../constants/cartConstants";
import initialState from "./initialState";
// const initialState = {
//     cartItems: [],
//     quantity: 0,
//     total: 0,
// };

export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            const newItem = action.payload;
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
                quantity: state.quantity + newItem.quantity,
            };
        case types.CART_INCREASE_ITEM:
            let tempCart = state.cartItems.map((cartItem) => {
                if (cartItem.product.product_id === action.payload) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            return { ...state, cartItems: tempCart };
        case types.CART_DECREASE_ITEM:
            let temporaryCart = state.cartItems.map((cartItem) => {
                if (cartItem.product.product_id === action.payload) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
            return { ...state, cartItems: temporaryCart };
        case types.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: [
                    ...state.cart.filter(
                        (cartItem) =>
                            cartItem.product.product_id !== action.payload
                    ),
                ],
            };
        case types.CART_CLEAR_ITEMS:
            return { ...state, cartItems: [], quantity: 0, total: 0 };

        case types.CART_GET_TOTAL:
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price } = cartItem.product;
                    const { quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.quantity += quantity;
                    cartTotal.total += itemTotal;
                    return cartTotal;
                },
                { total: 0, quantity: 0 }
            );
            total = parseFloat(total.toFixed(2));
            return { ...state, total, quantity };
        default:
            return state;
    }
};
