import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ModalLoading from "../Modal/ModalLoading";
import ModalSuccess from "../Modal/ModalSuccess";
import ModalError from "../Modal/ModalError";

const loadingMsg = {
    title: " Estamos procesando tu pedido...",
    btnCancel: "cancelar",
};

const successMsg = {
    title: "Recibimos tu Pedido!",
    textInfo:
        "Gracias por hacer tu pedido en Delilah. Podes seguir tu pedido para saber donde está",
    btnFollowOrder: "seguir pedido",
    btnBackHome: "ir al inicio",
};

const errorMsg = {
    title: "Error al intentar realizar el pedido",
    btnClose: "cerrar",
};

const ModalConfirmOrder = (props) => {
    const [orderSuccess, setOrderSucces] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setOrderSucces(true);
        }, 3000);
    }, [isLoading, orderSuccess]);
    return (
        <Modal isOpen={props.isOpen} onClose={props.onCloseModal}>
            {isLoading && <ModalLoading message={loadingMsg} />}
            {orderSuccess && <ModalSuccess message={successMsg} />}
            {error && <ModalError message={errorMsg} />}
        </Modal>
    );
};

export default ModalConfirmOrder;
