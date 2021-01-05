import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { favoriteReducer } from "./favoriteReducer";
import { cartReducer } from "./cartsReducer";
export default combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    category: categoryReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
});
