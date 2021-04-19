import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container:{
    margin: "2rem 0"
  },
  form: {
    display: "flex",
  },
  button: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
      margin: "0 0.5rem",
    },
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`);
  };
  return (
    <section>
      <div className={classes.container}>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Busca tu comida favorita"
        aria-label="search products"
        variant="outlined"
        color="primary"
        fullWidth
        placeholder="Hoy tengo ganas de..."
        value={query}
        onChange={handleChange}
      />
      <Button
        aria-label="button search"
        color="primary"
        variant="outlined"
        className={classes.button}
        type='submit'
      >
        Buscar
      </Button>
    </form>
    </div>
    </section>
  );
};

export default SearchBox;
