import React from "react";
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
