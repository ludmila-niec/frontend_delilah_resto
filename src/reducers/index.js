import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducer";
export default combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
});
