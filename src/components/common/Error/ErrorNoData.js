import React from "react";
import Layout from "../RegisterLoginLayout";
import errorImg from "../../../assets/status/no-data.png";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "3rem 0",
        width: "100%",
        paddingTop: "3rem",
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: "1.2rem",
    },
    img: {
        height: "165px",
        margin: "2rem",
    },
    btn: {
        margin: "1.5rem 0",
    },
}));

const ErrorNoData = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.container}>
                <img
                    src={errorImg}
                    alt="not found img"
                    className={classes.img}
                />
                <Typography color="secondary" className={classes.title}>
                    Algo salió mal
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    href="/login"
                >
                    iniciar sesion
                </Button>
            </div>
        </Layout>
    );
};

export default ErrorNoData;
