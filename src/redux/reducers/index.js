import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import categories from "./categoryReducer";
import products from "./productReducer";
import favorites from "./favoriteReducer";
import cart from "./cartsReducer";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    categories,
    products,
    favorites,
    cart,
    apiCallsInProgress,
});

export default rootReducer;
