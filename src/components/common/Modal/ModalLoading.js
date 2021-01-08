import React from "react";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import useStyles from "./modalStyle";
// import Modal from "./Modal";

const ModalLoading = ({ message }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography color="primary" className={classes.title}>
                {message.title}
            </Typography>
            <CircularProgress color="primary" />
            <Typography className={classes.textInfo}>
                Un momento por favor...
            </Typography>
        </div>
    );
};

// const ModalLoading = ({ isOpen, onClose, message }) => {
//     const classes = useStyles();
//     return (
//         <Modal isOpen={isOpen} onClose={onClose}>
//             <div className={classes.container}>
//                 <Typography color="primary" className={classes.title}>
//                     {message.title}
//                 </Typography>
//                 <CircularProgress color="primary" />
//                 <Typography className={classes.textInfo}>
//                     Un momento por favor...
//                 </Typography>
//             </div>
//         </Modal>
//     );
// };

export default ModalLoading;
