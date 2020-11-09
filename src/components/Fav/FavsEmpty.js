import React from "react";
import { Button, Typography } from "@material-ui/core";
import favStatusImg from "../../assets/status/no-likes.png";
import { makeStyles, Makestyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem",
    },
    textInfo: {
        fontSize: "1.5rem",
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "center",
    },
    btn: {
        fontSize: "1rem",
    },
}));

const FavsEmpty = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={favStatusImg} alt="no favourites" />
            <Typography color="secondary" className={classes.textInfo}>
                Todavia no agregaste productos favoritos
            </Typography>
            <Button variant="contained" color="primary" className={classes.btn}>
                agregar productos
            </Button>
        </div>
    );
};

export default FavsEmpty;
