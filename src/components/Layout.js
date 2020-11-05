import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <NavBar />
            <div style={{ marginTop: "7rem" }} />
            <main>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item container direction="column" xs={10}>
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
