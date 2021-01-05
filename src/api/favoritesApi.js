import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/api/favourites";
import { tokenConfig } from "./tokenApi";

export async function getFavorites(getState) {
    try {
        const token = await tokenConfig(getState);
        const response = await axios.get(baseUrl, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}

export async function saveFavorite(getState, product_id) {
    try {
        const token = await tokenConfig(getState);
        const body = { product_id };
        const response = await axios.post(baseUrl, body, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}

export async function removeFavorite(getState, product_id) {
    try {
        const token = await tokenConfig(getState);
        const response = await axios.delete(`${baseUrl}/${product_id}`, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}
