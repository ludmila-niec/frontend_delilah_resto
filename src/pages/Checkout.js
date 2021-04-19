import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
import CardItem from "../components/Checkout/CardItem";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import ModalConfirmOrder from "../components/Checkout/ModalConfirmOrder";
import { connect } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
  getTotal,
} from "../redux/actions/cartActions";
import { placeNewOrder } from "../redux/actions/orderActions";

//Material-ui
import { Button } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import EmptyCart from "../components/Checkout/EmptyCart";

const useStyles = makeStyles((theme) => ({
  intro__bg: {
    position: "absolute",
    zIndex: -10,
    height: "100%",
    width: "100%",

    "& div:first-child": {
      height: "75%",
      backgroundColor: "#F9F6F0",
      opacity: "50%",
    },
    "& div:last-child": {
      height: "25%",
      backgroundColor: theme.palette.secondaryLighter.main,
      opacity: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",

      "& div:first-child": {
        height: "100%",
        width: "75%",
      },

      "& div:last-child": {
        height: "100%",
        width: "25%",
      },
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    paddingTop: "8rem",
    paddingLeft: "2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
  },
  container: {
    padding: "3rem 2rem 8rem",
    [theme.breakpoints.up("sm")]: {
      padding: "4rem 8rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 8rem",
    },
  },
  btnClearBag: {
    margin: "5rem auto",
    display: "block",
  },
}));

const Checkout = ({
  cart,
  cartTotal,
  user,
  loading,
  newOrder,
  clearCart,
  getTotal,
  increaseItem,
  decreaseItem,
  removeItem,
  placeNewOrder,
}) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const getTotalRef = useRef(() => {});
  // modal state
  getTotalRef.current = () => {
    getTotal();
  };

  //when the component mounts, get de total cart value
  useEffect(() => {
    getTotalRef.current();
  }, []);

  //modal handlers
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  //clear cart
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <div className={classes.intro}>
          <div className={classes.intro__bg}>
            <div></div>
            <div></div>
          </div>
          <Typography variant="h2" className={classes.title}>
            Mi pedido
          </Typography>
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className={classes.container}>
              <div>
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
              </div>
              <CheckoutForm
                onOpenModal={handleOpenModal}
                cart={cart}
                total={cartTotal}
                user={user}
                placeNewOrder={placeNewOrder}
              />
            </div>
          )}
        </div>
      </main>
      {isOpen && (
        <ModalConfirmOrder
          onCloseModal={handleCloseModal}
          isOpen={isOpen}
          loading={loading}
          newOrder={newOrder}
        />
      )}
    </>
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
    newOrder: state.orders.newOrder,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
  getTotal,
  placeNewOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
