import axios from "axios";
import { handleError, handleResponse } from "./apiUtils";
import { tokenConfig } from "./tokenApi";
const baseUrl = process.env.REACT_APP_API_URL + "/orders";

export async function placeOrder(getState, order) {
  try {
    const token = await tokenConfig(getState);
    const response = await axios.post(baseUrl, order, token);
    return handleResponse(response);
  } catch (error) {
    console.log(error.response);
    handleError(error);
  }
}

export async function getOrders(getState) {
  try {
    const token = await tokenConfig(getState);
    const response = await axios.get(baseUrl, token);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
    console.log(error.response);
  }
}

// ADMIN update order status
export async function updateOrderStatus(getState, orderId, statusBody) {
  try {
    const token = await tokenConfig(getState);
    const response = await axios.patch(
      `${baseUrl}/${orderId}`,
      statusBody,
      token
    );
    return handleResponse(response);
  } catch (error) {
    console.log(error);
    handleError(error);
  }
}
