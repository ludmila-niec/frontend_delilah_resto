import React from "react";
//router
import { Link as RouterLink } from "react-router-dom";
//assets
import statusOkImg from "../../assets/status/status-ok.png";
import statusErrorImg from "../../assets/status/status-error.png";
//material-ui
import { Typography, Link } from "@material-ui/core";
// style
import { useStyles } from "./style/orderInfo";

const OrderInfo = ({ order }) => {
  const classes = useStyles();
  const statusIcon =
    order.OrderStatus.name === "CANCELADO" ? statusErrorImg : statusOkImg;
  const orderId = order.order_id;
  const date = order.createdAt.slice(0, 10);
  const payment = order.Payment.name;
  return (
    <div className={classes.container}>
      <div className={classes.statusContainer}>
        <img src={statusIcon} alt="status" />
      </div>
      <div className={classes.infoContainer}>
        <Typography>Pedido #{orderId}</Typography>
        <Typography>{date}</Typography>
        <Typography>{payment}</Typography>
        <Link component={RouterLink} to={`/order/${orderId}`}>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default OrderInfo;
