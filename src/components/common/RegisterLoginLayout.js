import React from "react";
import Header from "../Auth/HeaderAuth";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";

const RegisterLoginLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container xs={10}>
                    {children}
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Footer />
        </>
    );
};

export default RegisterLoginLayout;
