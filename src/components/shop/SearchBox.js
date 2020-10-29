import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: theme.spacing(2),
        display: "flex",
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
                placeholder="Buscar..."
            />
            <Button
                color="primary"
                variant="outlined"
                // startIcon={<Search />}
                className={classes.button}
            >
                Buscar
            </Button>
        </form>
    );
};

export default SearchBox;
