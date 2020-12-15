import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "75vh",
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />

            <main>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid
                        item
                        container
                        direction="column"
                        xs={10}
                        className={classes.container}
                    >
                        <div style={{ padding: "3rem" }}></div>
                        {children}
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
