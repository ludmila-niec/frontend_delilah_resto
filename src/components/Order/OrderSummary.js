import React from "react";
import OrderProductList from "./OrderProductList";
//router
import { Link as RouterLink } from "react-router-dom";
//material-ui
import { Typography, Button } from "@material-ui/core";
// style
import { useStyles } from "./style/orderSummary";

const OrderSummary = ({ order }) => {
  const classes = useStyles();
  const { adress, phone, firstName, lastName } = order.order.User;
  const products = order.order.products;
  const payment = order.order.Payment.name;

  return (
    <>
      <div className={classes.container}>
        <Typography>Detalle:</Typography>
        <hr style={{ opacity: 0.5 }} />
        <OrderProductList products={products} />
        <Typography className={classes.totalAmount}>Total: ${order.totalAmount}</Typography>
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

export default OrderSummary;
