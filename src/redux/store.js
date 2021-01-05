import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const cartItemsFromStorage = JSON.parse(localStorage.getItem("cart")) ?? [];

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

const preLoadState = {
    cart: {
        cartItems: cartItemsFromStorage,
        quantity: null,
        total: null,
    },
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preLoadState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
