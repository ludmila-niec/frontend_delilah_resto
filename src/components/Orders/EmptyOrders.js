import React from "react";
import orderStatusImg from "../../assets/status/no-orders.png";
import { Link as RouterLink } from "react-router-dom";

//material-ui
import { Button, Typography } from "@material-ui/core";
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

const EmptyOrders = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={orderStatusImg} alt="no orders yet" />
            <Typography color="secondary" className={classes.textInfo}>
                Todavia no realizaste pedidos
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                component={RouterLink}
                to="/home"
            >
                ir al inicio
            </Button>
        </div>
    );
};

export default EmptyOrders;
