import React, { useState } from "react";
import EmptyCart from "./EmptyCart";
import CardItem from "../Checkout/CardItem";
import CheckoutForm from "./CheckoutForm";
import ModalConfirmOrder from "./ModalConfirmOrder";

const products = [1, 2, 3];
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <>
            {products.length > 0 ? (
                <>
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
                </>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default Cart;
