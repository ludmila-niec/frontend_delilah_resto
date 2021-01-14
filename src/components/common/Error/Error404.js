import React from "react";
import { withRouter } from "react-router-dom";
import errorImg from "../assets/status/error-404.png";
import { Typography, IconButton } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6rem",
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: "1.5rem",
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

const Error404 = ({ errorText, history }) => {
    const classes = useStyles();
    const goBackRouter = () => {
        history.goBack();
    };
    return (
        <div className={classes.container}>
            <img src={errorImg} alt="not found img" className={classes.img} />
            <Typography color="secondary" className={classes.title}>
                {errorText}
            </Typography>
        </div>
    );
};

export default withRouter(Error404);
