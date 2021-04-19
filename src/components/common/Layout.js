import React from "react";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {
    return (
        <main style={{ minHeight: "75vh" }}>
            <Grid container>
                <Grid item xs={1} />
                <Grid item container direction="column" xs={10}>
                    <div style={{ padding: "3rem" }}></div>
                    {children}
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </main>
    );
};

export default Layout;
