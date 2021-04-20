import React from "react";
import OrderItem from "./OrderProduct";

const OrderProductList = ({ products }) => {
    return products.map((product) => (
        <OrderItem key={product.product_id} product={product} />
    ));
};

export default OrderProductList;
