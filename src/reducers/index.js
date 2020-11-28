import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import { categoryReducer, categoryProductReducer } from "./categoryReducer";
import { productDetailReducer } from "./productReducer";
import {
    getFavoritesReducer,
    addFavoriteReducer,
    deleteFavoriteReducer,
} from "./favoriteReducer";
export default combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    categoryList: categoryReducer,
    categoryDetail: categoryProductReducer,
    productDetail: productDetailReducer,
    favoriteList: getFavoritesReducer,
    favoriteAdd: addFavoriteReducer,
    favoriteDelete: deleteFavoriteReducer,
});
