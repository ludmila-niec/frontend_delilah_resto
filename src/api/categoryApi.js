import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/api/categories";
import { tokenConfig } from "./tokenApi";

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
