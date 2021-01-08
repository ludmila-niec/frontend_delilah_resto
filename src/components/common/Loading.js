import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "60vh",
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textLoading: {
        margin: "1.5rem 0",
    },
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress color="primary" />
            <Typography className={classes.textLoading}>Cargando...</Typography>
        </div>
    );
};

export default Loading;
