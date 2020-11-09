import React from "react";
import { Typography, Button } from "@material-ui/core";
import statusDoneImg from "../../assets/status/Done-blue.png";
import useStyles from "./modalStyle";

const ModalSuccess = ({ message }) => {
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
                >
                    {message.btnFollowOrder}
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    {message.btnBackHome}
                </Button>
            </div>
        </div>
    );
};

export default ModalSuccess;
