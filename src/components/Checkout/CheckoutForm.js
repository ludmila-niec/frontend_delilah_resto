import React, { useState } from "react";
import {
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#ffffff",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
      margin: "1rem 0",
      width: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
  formControl: {
    width: "220px",
  },
  orderDetail: {
    backgroundColor: "#ffffff",
    padding: "2rem",

    "& > *": {
      marginBottom: ".6rem",
    },
    borderRadius: theme.shape.borderRadius,
    marginBottom: "1.5rem",
  },
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
  btn: {
    fontSize: "1rem",
    display: "block",
    margin: "3rem auto",
  },
}));

const CheckoutForm = ({ onOpenModal, cart, total, user, placeNewOrder }) => {
  const classes = useStyles();
  const [payment, setPayment] = useState(3);
  const { firstName, lastName, adress, phone } = user;
  const orderDetail = cart.map((item) => {
    return {
      id: item.product_id,
      quantity: item.quantity,
    };
  });
  const handleSelectedPayment = (e) => {
    setPayment(e.target.value);
  };

  const handleCreateOrder = () => {
    const order = {
      detail: orderDetail,
      payment_method: payment,
    };
    placeNewOrder(order);
    //open modal to show status of the order placement
    onOpenModal();
  };
  return (
    <div className={classes.container}>
      <div className={classes.orderDetail}>
        <Typography color="primary" className={classes.totalPrice}>
          Total: ${total}
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="payment-method">Metodo de Pago</InputLabel>
          <Select
            labelId="payment-method"
            id="select-payment"
            value={payment}
            onChange={handleSelectedPayment}
            inputProps={{ name: "payment_method" }}
            required
          >
            <MenuItem value={1}>Efectivo</MenuItem>
            <MenuItem value={2}>Debito</MenuItem>
            <MenuItem value={3}>Credito</MenuItem>
            <MenuItem value={4}>Mercado Pago</MenuItem>
          </Select>
          <FormHelperText>Seleccioná tu metodo de pago</FormHelperText>
        </FormControl>
        <Typography color="primary">Domicilio:</Typography>
        <Typography>{adress}</Typography>
        <Typography color="primary">Telefono:</Typography>
        <Typography>{phone}</Typography>
        <Typography color="primary">Recibe:</Typography>
        <Typography>{`${firstName} ${lastName}`}</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={handleCreateOrder}
      >
        confirmar pedido
      </Button>
    </div>
  );
};

export default CheckoutForm;
