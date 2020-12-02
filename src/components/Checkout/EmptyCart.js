import React from "react";
import { Button, Typography } from "@material-ui/core";
import emptyCartImg from "../../assets/status/empty-cart.png";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem",
    },
    textInfo: {
        fontSize: "1.5rem",
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "center",
    },
    btn: {
        fontSize: "1rem",
    },
}));
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
