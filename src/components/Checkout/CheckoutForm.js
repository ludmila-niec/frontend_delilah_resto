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
// style
import {useStyles} from './style/checkoutForm'

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
