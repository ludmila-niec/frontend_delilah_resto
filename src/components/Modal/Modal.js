import React from "react";
import ReactDOM from "react-dom";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useStyles } from "./style/modalContainer";

const Modal = ({ children, isOpen, onClose }) => {
  const classes = useStyles();
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div className={classes.container}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <Close color="error" style={{ fontSize: "2rem" }} />
        </IconButton>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
