import React from "react";
import Layout from "./Layout";
import errorImg from "../../assets/status/no-data.png";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3rem 0",
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: "1.2rem",
    },
    img: {
        height: "165px",
        margin: "2rem",
    },
    backBtn: {
        alignSelf: "flex-start",
        padding: "1.5rem",
    },
    icon: {
        fontSize: "2rem",
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
            </div>
        </Layout>
    );
};

export default ErrorNoData;
