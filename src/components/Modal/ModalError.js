import React from "react";
import { Typography, Button } from "@material-ui/core";
import statusErrorImg from "../../assets/status/error.png";
import useStyles from "./modalStyle";

const ModalError = ({ message }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography color="error" className={classes.title}>
                {message.title}
            </Typography>
            <img
                src={statusErrorImg}
                alt="status error"
                className={classes.statusImg}
            />
            <div className={classes.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                >
                    {message.btnClose}
                </Button>
            </div>
        </div>
    );
};

export default ModalError;
