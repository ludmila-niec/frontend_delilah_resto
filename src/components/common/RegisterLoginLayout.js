import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),

        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(14),
            marginBottom: theme.spacing(8),
            padding: theme.spacing(8),
            backgroundColor: "#ffffff",
            borderRadius: theme.shape.borderRadius,
            boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        },
    },
}));

const RegisterLoginLayout = ({ children }) => {
    const classes = useStyles();
    return (
        <main style={{ minHeight: "90vh" }}>
            <Grid container>
                <Grid item xs={1} md={3} lg={4} />
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    xs={10}
                    md={6}
                    lg={4}
                    className={classes.container}
                >
                    {children}
                </Grid>
                <Grid item xs={1} md={3} lg={4} />
            </Grid>
        </main>
    );
};

export default RegisterLoginLayout;
