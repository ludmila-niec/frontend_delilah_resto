import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "350px",
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
        case "NEW":
            return 0;
        case "OK":
            return 1;
        case "INPREP":
            return 2;
        case "SHIP":
            return 3;
        case "DELIV":
            return 4;
        default:
            return null;
    }
}

const OrderStatus = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    useEffect(() => {
        const step = getStatus("SHIP");
        setActiveStep(step);
    }, [activeStep]);
    return (
        <div>
            <Stepper
                activeStep={activeStep}
                orientation="vertical"
                className={classes.root}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default OrderStatus;
