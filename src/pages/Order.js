import React from "react";
import Layout from "../components/common/Layout";
import OrderStatus from "../components/Order/OrderStatus";
import OrderDetail from "../components/Order/OrderDetail";
import { Typography } from "@material-ui/core";

const Order = () => {
    return (
        <Layout>
            <Typography variant="h5">Seguir mi pedido</Typography>
            <OrderStatus />
            <OrderDetail />
        </Layout>
    );
};

export default Order;
