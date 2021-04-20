import React from "react";
import FavGroup from "./FavGroup";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
// style
import { useStyles } from "./style/favSection";

const FavSection = ({ favorites }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.container__title}>
        <Link component={RouterLink} to="/favs">
          <Typography variant="h2" color="secondary" className={classes.title}>
            Mis Favoritos
          </Typography>
          <Favorite color="secondary" className={classes.favIcon} />
        </Link>
      </div>
      <div className={classes.container__carousel}>
        <FavGroup favorites={favorites} />
      </div>
    </div>
  );
};

export default FavSection;
