import React from "react";
import OrderItem from "./OrderItem";

const OrderItemList = ({ products }) => {
    return products.map((product) => (
        <OrderItem key={product.product_id} product={product} />
    ));
};

export default OrderItemList;
