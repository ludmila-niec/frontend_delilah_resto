import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const cartItemsFromStorage = JSON.parse(localStorage.getItem("cart")) ?? [];

const preLoadState = {
    cart: {
        cartItems: cartItemsFromStorage,
        quantity: cartItemsFromStorage.length,
        total: null,
    },
};

const middleware = [thunk];

export default function configureStore() {
    return createStore(
        rootReducer,
        preLoadState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}
