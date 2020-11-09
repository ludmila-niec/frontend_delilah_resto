import React, { useState } from "react";
import Layout from "../components/Layout";
import CardItem from "../components/Checkout/CardItem";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { Typography } from "@material-ui/core";
import ModalConfirmOrder from "../components/Checkout/ModalConfirmOrder";

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <Layout>
            <Typography variant="h5">Mi pedido</Typography>
            <CardItem />
            <CardItem />
            <CardItem />
            <CheckoutForm onOpenModal={handleOpenModal} />
            {isOpen && (
                <ModalConfirmOrder
                    onCloseModal={handleCloseModal}
                    isOpen={isOpen}
                />
            )}
        </Layout>
    );
};

export default Checkout;
