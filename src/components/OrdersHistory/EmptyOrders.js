import React from "react";
import orderStatusImg from "../../assets/status/no-orders.png";
import { Link as RouterLink } from "react-router-dom";
//material-ui
import { Button, Typography } from "@material-ui/core";
// style
import {useStyles} from './style/emptyOrders'

const EmptyOrders = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className="align-content">
          <img
            className={classes.container__img}
            src={orderStatusImg}
            alt="no orders yet"
          />
          <Typography color="secondary" className={classes.container__textInfo}>
            Todavia no realizaste pedidos
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.container__btn}
          component={RouterLink}
          to="/home"
        >
          ir al inicio
        </Button>
      </div>
    </div>
  );
};

export default EmptyOrders;
