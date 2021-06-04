import React from "react";
//material-ui
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
// styles
import { useStyles } from "./style/orderStatus";

const steps = [
  "Recibido",
  "Confirmado",
  "En Preparación",
  "En camino",
  "Entregado",
];

const OrderStatus = ({ orderStatus }) => {
  const classes = useStyles();

  //check media query for displaying vertical or horizontal in the stepper component
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  //if order is cancelled, early return cancelled view
  if (orderStatus === 6)
    return (
      <Typography variant="h5" className={classes.cancelled}>
        Pedido cancelado
      </Typography>
    );

  return (
    <Stepper
      activeStep={orderStatus}
      orientation={matches ? "horizontal" : "vertical"}
      className={classes.root}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default OrderStatus;
