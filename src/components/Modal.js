import React from "react";
import ReactDOM from "react-dom";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#000000de",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        position: "relative",
        top: "8rem",
        backgroundColor: "#ffffff",
        padding: "1rem",
        width: "350px",
        borderRadius: theme.shape.borderRadius,
    },
    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
    },
}));

const Modal = (props) => {
    const classes = useStyles();
    if (!props.isOpen) {
        return null;
    }
    return ReactDOM.createPortal(
        <div className={classes.modal}>
            <div className={classes.container}>
                <IconButton
                    className={classes.closeBtn}
                    onClick={props.onClose}
                >
                    <Close color="error" style={{ fontSize: "2rem" }} />
                </IconButton>
                {props.children}
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
