import React from "react";
import { Typography, CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F9F6F0",
        minHeight: "100vh",
    },
    title: {
        fontSize: "2.5rem",
        margin: "2rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "3.2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4.5rem",
        },
    },
}));

const LoadingIntro = () => {
    const classes = useStyles();
    return ( 
            <Grid
                item
                container
                xs={10}
                md={8}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography
                    variant="h1"
                    color="secondary"
                    className={classes.title}
                >
                    Delilah Resto
                </Typography>
            <CircularProgress color="primary" size="25px" />
            </Grid>     
    );
};

export default LoadingIntro;
