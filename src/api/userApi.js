import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/auth";
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
