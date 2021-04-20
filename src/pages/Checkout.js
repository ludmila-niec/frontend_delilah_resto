import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
import CardProduct from "../components/Checkout/CardProduct";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import ModalConfirmOrder from "../components/Checkout/ModalConfirmOrder";
import EmptyCart from "../components/Checkout/EmptyCart";
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
// style
import { useStyles } from "../components/Checkout/style/checkoutPage";

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
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const getTotalRef = useRef(() => {});

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

  const handleClearCart = () => {
    clearCart();
  };

  const userHasProducts = cart.length > 0;

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
          {userHasProducts ? (
            <div className={classes.container}>
              <div>
                {cart.map((item) => (
                  <CardProduct
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
          ) : (
            <EmptyCart />
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
