import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./style/orderProduct";

const OrderProduct = ({ product }) => {
  const classes = useStyles();
  const { name, img } = product;
  const price = product.ProductOrders.product_price;
  const quantity = product.ProductOrders.product_quantity;
  return (
    <>
      <div className={classes.container}>
        <div className={classes.backgroundImg}>
          <img src={img} alt={name} className={classes.img} />
        </div>
        <div className={classes.containerText}>
          <Typography>{name}</Typography>
          <Typography>Unidades: {quantity}</Typography>
          <Typography>Precio: ${price} x u.</Typography>
        </div>
      </div>
      <hr style={{ opacity: 0.5 }} />
    </>
  );
};

export default OrderProduct;
