import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import statusDoneImg from "../../assets/status/Done-blue.png";
import statusErrorImg from "../../assets/status/error.png";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& > *": {
            margin: "1rem",
        },
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: 600,
        textAlign: "center",
    },
    textInfo: {
        textAlign: "center",
    },
    statusImg: {
        width: "100px",
        height: "100px",
    },
    btnContainer: {
        width: "60%",
    },
    btn: {
        fontSize: "1rem",
        width: "100%",
        marginBottom: "1rem",
    },
}));

const ModalConfirmOrder = (props) => {
    const classes = useStyles();
    const [orderSuccess, setOrderSucces] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setErrors] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setOrderSucces(true);
        }, 3000);
    }, [isLoading, orderSuccess]);
    return (
        <Modal isOpen={props.isOpen} onClose={props.onCloseModal}>
            <div className={classes.container}>
                {isLoading && (
                    <>
                        <Typography color="primary" className={classes.title}>
                            Estamos procesando tu pedido...
                        </Typography>
                        <CircularProgress color="primary" />
                        <div className={classes.btnContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                cancelar
                            </Button>
                        </div>
                    </>
                )}
                {orderSuccess && (
                    <>
                        <Typography color="primary" className={classes.title}>
                            Recibimos tu Pedido!
                        </Typography>
                        <img
                            src={statusDoneImg}
                            alt="status confirm"
                            className={classes.statusImg}
                        />
                        <Typography className={classes.textInfo}>
                            Gracias por hacer tu pedido en Delilah. Podes seguir
                            tu pedido para saber donde está.
                        </Typography>
                        <div className={classes.btnContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                seguir pedido
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.btn}
                            >
                                ir al inicio
                            </Button>
                        </div>
                    </>
                )}
                {error && (
                    <>
                        <Typography color="error" className={classes.title}>
                            Error al intentar realizar el pedido
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
                                cerrar
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default ModalConfirmOrder;
