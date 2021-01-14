import React from "react";
import Header from "../Auth/HeaderAuth";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "75vh",
    },
}));

const RegisterLoginLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container xs={10} className={classes.container}>
                    {children}
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Footer />
        </>
    );
};

export default RegisterLoginLayout;
