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
      return { ...state, orderList: action.orders };
    case types.LOAD_ORDER_BY_ID_SUCCESS:
      return {...state, currentOrder: action.order}
    case types.UPDATE_ORDER_STATUS_OPTIMISTIC:
      let tempOrders = state.orderList.map((order) => {
        if (order.order_id === action.order_id) {
          order = {
            ...order,
            OrderStatus: { ...order.OrderStatus, name: action.statusName },
          };
        }
        return order;
      });
      return { ...state, orderList: tempOrders };
    default:
      return state;
  }
};

export default orderReducer;
