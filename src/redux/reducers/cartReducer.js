import * as types from "../constants/cartConstants";
import initialState from "./initialState";

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case types.CART_ADD_ITEM:
            //first check if the new product added alrealy exists in cart
            const itemInCart = state.cartItems.find(
                (item) => item.product_id === action.product_id
            );
            //if exists, update only quantity
            if (itemInCart) {
                let updatedCartItems = state.cartItems.map((item) =>
                    item.product_id === action.product_id
                        ? {
                              ...item,
                              quantity: item.quantity + action.quantity,
                          }
                        : item
                );
                return { ...state, cartItems: updatedCartItems };
            }
            const newItem = {
                product_id: action.product_id,
                price: action.price,
                quantity: action.quantity,
            };
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
                quantity: state.quantity + newItem.quantity,
            };
        case types.CART_INCREASE_ITEM:
            let tempCart = state.cartItems.map((cartItem) => {
                if (cartItem.product_id === action.product_id) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            return { ...state, cartItems: tempCart };
        case types.CART_DECREASE_ITEM:
            let temporaryCart = state.cartItems.map((cartItem) => {
                if (cartItem.product_id === action.product_id) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
            return { ...state, cartItems: temporaryCart };
        case types.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.filter(
                        (cartItem) => cartItem.product_id !== action.product_id
                    ),
                ],
            };
        case types.CART_CLEAR_ITEMS:
            return { ...state, cartItems: [], quantity: 0, total: 0 };

        case types.CART_GET_TOTAL:
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    // const quantity = cartItem;
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

export default cartReducer;
