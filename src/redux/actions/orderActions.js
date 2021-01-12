import * as types from "../constants/orderConstants";
import * as orderApi from "../../api/orderApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { clearCart } from "./cartActions";

//action creators
export function placeNewOrderSuccess(success, order_id) {
    return { type: types.PLACE_ORDER_SUCCESS, success, order_id };
}

export function loadOrdersSuccess(orders) {
    return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function loadOrderByIdSucccess(order) {
    return { type: types.LOAD_ORDER_BY_ID_SUCCESS, order };
}

//POST create a new order
export const placeNewOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await orderApi.placeOrder(getState, order);
        const { success, order_id } = response.data;
        await dispatch(placeNewOrderSuccess(success, order_id));
        //if the order is placed successfully, clear the cart
        dispatch(clearCart());
    } catch (error) {
        dispatch(apiCallError());
        console.log(error);
    }
};

//GET array of orders
export const loadOrders = () => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await orderApi.getOrders(getState);
        const orders = response.data.data;
        dispatch(loadOrdersSuccess(orders));
    } catch (error) {
        dispatch(apiCallError());
    }
};

//GET a single by ID
export const loadOrderById = () => (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
    } catch (error) {
        dispatch(apiCallError());
    }
};
