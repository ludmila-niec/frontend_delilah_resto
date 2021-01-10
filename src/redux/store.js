import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const cartItemsFromStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
function getquantity() {
    return cartItemsFromStorage.reduce((acc, item) => acc + item.quantity, 0);
}

const preLoadState = {
    cart: {
        cartItems: cartItemsFromStorage,
        quantity: cartItemsFromStorage.length === 0 ? 0 : getquantity(),

        total: 0,
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
