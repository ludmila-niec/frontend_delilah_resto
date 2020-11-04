import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoadingIntro from "../components/intro/LoadingIntro";
import Intro from "../components/intro/Intro";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#F9F6F0",
        minHeight: "100vh",
    },
});

const Welcome = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [isLoading]);

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1} md={2} />
            {isLoading ? <LoadingIntro /> : <Intro />}
            <Grid item xs={1} md={2} />
        </Grid>
    );
};

export default Welcome;
