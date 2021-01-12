import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import categories from "./categoryReducer";
import products from "./productReducer";
import favorites from "./favoriteReducer";
import cart from "./cartReducer";
import apiCallsInProgress from "./apiStatusReducer";
import orders from "./orderReducer";
const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    categories,
    products,
    favorites,
    cart,
    orders,
    apiCallsInProgress,
});

export default rootReducer;
