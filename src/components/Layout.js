import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />

            <main style={{ minHeight: "calc(100vh - 200px)" }}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid
                        item
                        container
                        direction="column"
                        xs={10}
                        style={{ paddingTop: "7rem" }}
                    >
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
