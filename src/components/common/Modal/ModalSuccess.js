import React from "react";
// import Modal from "./Modal";
import { Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import statusDoneImg from "../../../assets/status/Done-blue.png";
import useStyles from "./modalStyle";

const ModalSuccess = ({ message, linkPrimary, linkSecondary }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography color="primary" className={classes.title}>
                {message.title}
            </Typography>
            <img
                src={statusDoneImg}
                alt="status confirm"
                className={classes.statusImg}
            />
            <Typography className={classes.textInfo}>
                {message.textInfo}
            </Typography>
            <div className={classes.btnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    component={RouterLink}
                    to={linkPrimary}
                >
                    {message.btnPrimary}
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                    component={RouterLink}
                    to={linkSecondary}
                >
                    {message.btnSecondary}
                </Button>
            </div>
        </div>
    );
};

export default ModalSuccess;
