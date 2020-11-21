import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
import { categoryReducer, categoryProductReducer } from "./categoryReducer";
export default combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    categoryList: categoryReducer,
    categoryDetail: categoryProductReducer,
});
