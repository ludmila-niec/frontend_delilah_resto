import axios from "axios";
import { handleError, handleResponse } from "./apiUtils";
import { tokenConfig } from "./tokenApi";

const baseUrl = process.env.REACT_APP_API_URL + "/categories";

export async function getCategories(getState) {
    try {
        const token = await tokenConfig(getState);
        const response = await axios.get(baseUrl, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}

export async function getCategoryById(getState, id) {
    try {
        const token = await tokenConfig(getState);
        const response = await axios.get(`${baseUrl}/${id}`, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}
