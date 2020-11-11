import React from "react";
import OrderItem from "./OrderItem";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "2rem 0",
        padding: "1.5rem",
        backgroundColor: "#f3f3f3",
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
        fontSize: "1rem",
        marginBottom: "3rem",
    },
}));

const OrderDetail = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <Typography>Detalle:</Typography>
                <hr style={{ opacity: 0.5 }} />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <Typography className={classes.totalAmount}>
                    Total: $780
                </Typography>
                <div className={classes.orderInfo}>
                    <div>
                        <Typography color="primary">Metodo de pago:</Typography>
                        <Typography>Mercado pago</Typography>
                    </div>
                    <div>
                        <Typography color="primary">
                            Dirección de envío:
                        </Typography>
                        <Typography>Pedro goyena</Typography>
                    </div>
                    <div>
                        <Typography color="primary">Telefono:</Typography>
                        <Typography>115968547</Typography>
                    </div>
                    <div>
                        <Typography color="primary">Entregado a:</Typography>
                        <Typography>Ludmila uala</Typography>
                    </div>
                </div>
            </div>
            <Button variant="contained" color="primary" className={classes.btn}>
                volver
            </Button>
        </>
    );
};

export default OrderDetail;
