import React, { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CardProduct from "../Checkout/CardProduct";
import CheckoutForm from "./CheckoutForm";
import ModalConfirmOrder from "./ModalConfirmOrder";
import { useSelector, useDispatch } from "react-redux";
import { getTotal, clearCart } from "../../actions/cartActions";

//Material-ui
import { Button } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    btnClearBag: {
        margin: "2rem auto",
    },
}));

const Cart = () => {
    const classes = useStyles();
    //modal handlers
    const [isOpen, setIsOpen] = useState(false);
    //cart data from store
    const cartData = useSelector((state) => state.cart);
    const { cart } = cartData;
    const dispatch = useDispatch();

    //refresh cart data
    useEffect(() => {
        dispatch(getTotal());
        console.log("total cart");
    }, [cart, dispatch]);

    //clear cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    
    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <>
            {cart.length > 0 ? (
                <>
                    {cart.map((item) => (
                        <CardProduct
                            key={item.product.product_id}
                            productData={item}
                        />
                    ))}
                    <Button
                        variant="outlined"
                        startIcon={<LocalMall />}
                        className={classes.btnClearBag}
                        onClick={handleClearCart}
                    >
                        vaciar bolsa
                    </Button>
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
