import axios from "axios";
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from "../constants/userConstants";

export const register = ({
    firstName,
    lastName,
    phone,
    adress,
    username,
    email,
    password,
}) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = {
            firstName,
            lastName,
            phone,
            adress,
            username,
            email,
            password,
        };
        const { data } = await axios.post(
            "https://delilahrestoapp.herokuapp.com/api/auth/register",
            body,
            config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.message,
        });
        console.log(error.response);
    }
};
