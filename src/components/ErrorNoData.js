import React from "react";
import errorImg from "../assets/status/no-data.png";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: "1.2rem",
    },
    img: {
        height: "200px",
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

const ErrorNoData = ({ errorText }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={errorImg} alt="not found img" className={classes.img} />
            <Typography color="secondary" className={classes.title}>
                {errorText}
            </Typography>
        </div>
    );
};

export default ErrorNoData;
