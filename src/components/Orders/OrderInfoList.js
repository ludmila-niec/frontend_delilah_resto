import React from "react";
import OrderInfo from "./OrderInfo";

const OrderInfoList = ({ orders }) => {
    return orders.map((order) => (
        <OrderInfo key={order.order_id} order={order} />
    ));
};

export default OrderInfoList;
