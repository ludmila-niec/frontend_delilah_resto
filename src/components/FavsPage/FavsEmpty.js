import React from "react";
import { Button, Typography } from "@material-ui/core";
import favStatusImg from "../../assets/status/no-likes.png";
import { Link as RouterLink } from "react-router-dom";
// style
import { useStyles } from "./style/favEmpty";

const FavsEmpty = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img src={favStatusImg} alt="no favourites" />
        <Typography color="secondary" className={classes.textInfo}>
          Todavia no agregaste productos favoritos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          component={RouterLink}
          to="/home"
        >
          agregar productos
        </Button>
      </div>
    </div>
  );
};

export default FavsEmpty;
