import {
    CART_ADD_ITEM,
    CART_INCREASE_ITEM,
    CART_DECREASE_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAR_ITEMS,
    CART_GET_TOTAL,
} from "../constants/cartConstants";

const initialState = {
    cart: [],
    quantity: 0,
    total: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const newItem = action.payload;
            return {
                ...state,
                cart: [...state.cart, newItem],
                quantity: state.quantity + newItem.quantity,
            };
        case CART_INCREASE_ITEM:
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.product.product_id === action.payload) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            return { ...state, cart: tempCart };
        case CART_DECREASE_ITEM:
            let temporaryCart = state.cart.map((cartItem) => {
                if (cartItem.product.product_id === action.payload) {
                    cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            });
            return { ...state, cart: temporaryCart };
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cart: [
                    ...state.cart.filter(
                        (cartItem) =>
                            cartItem.product.product_id !== action.payload
                    ),
                ],
            };
        case CART_CLEAR_ITEMS:
            return { ...state, cart: [], quantity: 0, total: 0 };

        case CART_GET_TOTAL:
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
