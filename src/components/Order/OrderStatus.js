import React, { useState, useEffect } from "react";

//material-ui
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "350px",
    [theme.breakpoints.up('md')]:{
        height:'250px'
    },
    "&.MuiPaper-root": {
      backgroundColor: "transparent",
    },
  },
}));

const steps = [
  "Recibido",
  "Confirmado",
  "En Preparación",
  "En camino",
  "Entregado",
];

function getStatus(status) {
  switch (status) {
    case "NUEVO":
      return 0;
    case "CONFIRMADO":
      return 1;
    case "PREPARANDO":
      return 2;
    case "ENVIANDO":
      return 3;
    case "ENTREGADO":
      return 6;
    case "CANCELADO":
      return 5;
    default:
      return status;
  }
}

const OrderStatus = ({ orderStatus }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const step = getStatus(orderStatus.name);
    setActiveStep(step);
  }, [activeStep]);

  //check media query for display vertical or horizontal in the stepper component
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  //if order is cancelled, early return cancelled view
  if (activeStep === 5)
    return (
      <Typography variant="h5" color="error">
        Pedido cancelado
      </Typography>
    );

  return (
    <Stepper
      activeStep={activeStep}
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
