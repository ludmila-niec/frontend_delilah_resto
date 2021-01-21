import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(4),
        display: "flex",
    },
    button: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "inline-flex",
            margin: "0 0.5rem",
        },
    },
}));

const SearchBox = () => {
    const classes = useStyles();
    return (
        <form className={classes.form}>
            <TextField
                label="Busca tu comida favorita"
                aria-label="search products"
                variant="outlined"
                color="primary"
                fullWidth
                placeholder="Hoy tengo ganas de..."
            />
            <Button
                aria-label="button search"
                color="primary"
                variant="outlined"
                className={classes.button}
            >
                Buscar
            </Button>
        </form>
    );
};

export default SearchBox;
