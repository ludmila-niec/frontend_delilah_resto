import axios from "axios";
import { handleError, handleResponse } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/auth";
// const apiUrl = "https://delilahrestoapp.herokuapp.com/api/auth";
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export async function registerUser(data) {
    try {
        const body = data;
        const response = await axios.post(baseUrl + "/register", body, config);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}

export async function loginUser(data) {
    try {
        const body = data;
        const response = await axios.post(baseUrl + "/login", body, config);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}
