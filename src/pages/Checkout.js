import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
import Cart from "../components/Checkout/Cart";

const Checkout = () => {
    return (
        <Layout>
            <Typography variant="h5">Mi pedido</Typography>
            <Cart />
        </Layout>
    );
};

export default Checkout;
