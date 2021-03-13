import React from "react";
import OrderItemList from "./OrderItemList";
//router
import { Link as RouterLink } from "react-router-dom";

//material-ui
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    boxShadow: theme.myShadow.cardShadow,
    borderRadius: theme.shape.borderRadius,
  },
  totalAmount: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
    margin: "1rem 0",
  },
  orderInfo: {
    margin: "1rem 0",

    "& > div": {
      margin: ".8rem 0",
    },
  },
  btn: {
    width: "80%",
    display: "flex",
    fontSize: "1rem",
    margin: "4rem auto",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
}));

const OrderDetail = ({ order }) => {
  const classes = useStyles();
  const { adress, phone, firstName, lastName } = order.User;
  const products = order.products;
  const payment = order.Payment.name;

  const total = products.reduce(
    (acc, item) =>
      acc +
      item.ProductOrders.product_price * item.ProductOrders.product_quantity,
    0
  );
  return (
    <>
      <div className={classes.container}>
        <Typography>Detalle:</Typography>
        <hr style={{ opacity: 0.5 }} />
        <OrderItemList products={products} />

        <Typography className={classes.totalAmount}>Total: ${total}</Typography>
        <div className={classes.orderInfo}>
          <div>
            <Typography color="primary">Metodo de pago:</Typography>
            <Typography>{payment}</Typography>
          </div>
          <div>
            <Typography color="primary">Dirección de envío:</Typography>
            <Typography>{adress}</Typography>
          </div>
          <div>
            <Typography color="primary">Telefono:</Typography>
            <Typography>{phone}</Typography>
          </div>
          <div>
            <Typography color="primary">Entregado a:</Typography>
            <Typography>{`${firstName} ${lastName}`}</Typography>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        component={RouterLink}
        to="/orders"
      >
        ver mis pedidos
      </Button>
    </>
  );
};

export default OrderDetail;
