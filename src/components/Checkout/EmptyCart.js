import React from "react";
import { Button, Typography } from "@material-ui/core";
import emptyCartImg from "../../assets/status/empty-cart.png";
import { Link as RouterLink } from "react-router-dom";
// style
import {useStyles} from './style/emptyCart'
const EmptyCart = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={emptyCartImg} alt="no products" />
            <Typography color="secondary" className={classes.textInfo}>
                Aún no agregaste productos a tu pedido
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                component={RouterLink}
                to="/home"
            >
                agregar productos
            </Button>
        </div>
    );
};

export default EmptyCart;
