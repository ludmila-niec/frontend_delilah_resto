import * as types from "../constants/orderConstants";
import initialState from "./initialState";

const orderReducer = (state = initialState.orders, action) => {
    switch (action.type) {
        case types.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                newOrder: {
                    success: action.success,
                    order_id: action.order_id,
                },
            };
        case types.LOAD_ORDERS_SUCCESS:
            return { ...state, orders: action.orders };
        default:
            return state;
    }
};

export default orderReducer;
