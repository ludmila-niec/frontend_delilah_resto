import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/common/Layout";
import { Typography } from "@material-ui/core";
import CardItem from "../components/Checkout/CardItem";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import ModalConfirmOrder from "../components/Checkout/ModalConfirmOrder";
// import Cart from "../components/Checkout/Cart";
import { connect } from "react-redux";
import {
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    getTotal,
} from "../redux/actions/cartActions";

//Material-ui
import { Button } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import EmptyCart from "../components/Checkout/EmptyCart";

const useStyles = makeStyles((theme) => ({
    btnClearBag: {
        margin: "2rem auto",
    },
}));

const Checkout = ({
    cart,
    cartTotal,
    user,
    clearCart,
    getTotal,
    increaseItem,
    decreaseItem,
    removeItem,
}) => {
    console.log("cart");
    console.log(cart);
    const classes = useStyles();
    const prevCart = useRef([]);
    //modal handlers
    const [isOpen, setIsOpen] = useState(false);
    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }

    //when the component mounts, get de total cart value
    useEffect(() => {
        getTotal();
    }, []);

    //clear cart
    const handleClearCart = () => {
        clearCart();
    };

    return (
        <Layout>
            <Typography variant="h5">Mi pedido</Typography>
            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    {cart.map((item) => (
                        <CardItem
                            key={item.product_id}
                            productData={item.productData}
                            quantity={item.quantity}
                            increaseItem={increaseItem}
                            decreaseItem={decreaseItem}
                            removeItem={removeItem}
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
                    <CheckoutForm
                        onOpenModal={handleOpenModal}
                        total={cartTotal}
                        user={user}
                    />
                    {isOpen && (
                        <ModalConfirmOrder
                            onCloseModal={handleCloseModal}
                            isOpen={isOpen}
                        />
                    )}
                </>
            )}
        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        cart:
            state.cart.cartItems.length === 0
                ? []
                : state.cart.cartItems.map((cartItem) => {
                      return {
                          ...cartItem,
                          productData: state.products.find(
                              (p) => p.product_id === cartItem.product_id
                          ),
                      };
                  }),
        cartTotal: state.cart.total,
        user: state.userLogin.user,
    };
}

const mapDispatchToProps = {
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    getTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
