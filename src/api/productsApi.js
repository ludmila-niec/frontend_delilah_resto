import { handleError, handleResponse } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/api/products";
import { tokenConfig } from "./tokenApi";

export async function getProductById(getState, id) {
    try {
        const token = await tokenConfig(getState);
        const response = await axios.get(`${baseUrl}/${id}`, token);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}
