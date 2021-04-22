import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// style
import { useStyles } from "./style/searchBox";

const SearchBox = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value.trim()) return;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
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
            type="submit"
          >
            Buscar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
