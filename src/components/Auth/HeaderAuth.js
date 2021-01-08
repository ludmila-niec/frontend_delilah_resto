import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.2rem",
    },
    offset: theme.mixins.toolbar,
}));

const HeaderAuth = () => {
    const classes = useStyles();
    return (
        <AppBar color="primary" position="fixed">
            <Toolbar>
                <Typography
                    variant="h1"
                    color="secondary"
                    className={classes.title}
                >
                    Delilah Resto
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderAuth;
