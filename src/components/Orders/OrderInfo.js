import React from "react";
//router
import { Link as RouterLink } from "react-router-dom";
//assets
import statusOkImg from "../../assets/status/status-ok.png";
import statusErrorImg from "../../assets/status/status-error.png";
//material-ui
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.myShadow.cardShadow,
        display: "flex",
        alignItems: "center",
        height: "120px",
        marginBottom: "1.5rem",
    },
    statusContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        width: "90px",
        height: "100%",
        borderRadius: "inherit",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    infoContainer: {
        marginLeft: "1rem",
    },
}));

const OrderInfo = ({ order }) => {
    const classes = useStyles();
    const statusIcon =
        order.OrderStatus.name === "CANCELADO" ? statusErrorImg : statusOkImg;
    console.log(statusIcon);
    const orderId = order.order_id;
    const date = order.createdAt.slice(0, 10);
    const payment = order.Payment.name;
    return (
        <div className={classes.container}>
            <div className={classes.statusContainer}>
                <img src={statusIcon} />
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
