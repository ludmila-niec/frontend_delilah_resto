import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        margin: "0 0.5rem",
    },
}));

const SearchBox = () => {
    const classes = useStyles();
    return (
        <form className={classes.form}>
            <TextField
                variant="outlined"
                color="primary"
                margin="dense"
                placeholder="Hoy tengo ganas de..."
            />
            <Button
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
