import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import ModalLoading from "../Modal/ModalLoading";
import ModalSuccess from "../Modal/ModalSuccess";
import ModalError from "../Modal/ModalError";
const loadingMsg = {
    title: " Agregando a tu pedido",
    btnCancel: "cancelar",
};

const successMsg = {
    title: "Producto agregado!",
    btnFollowOrder: "realizar pedido",
    btnBackHome: "agregar mas productos",
};

const errorMsg = {
    title: "Error al intentar agregar el producto",
    btnClose: "cerrar",
};

const ModalAddProduct = (props) => {
    const [productAddSuccess, setProductAddSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setProductAddSuccess(true);
        }, 3000);
    }, [isLoading, productAddSuccess]);
    return (
        <Modal isOpen={props.isOpen} onClose={props.onCloseModal}>
            {isLoading && <ModalLoading message={loadingMsg} />}
            {productAddSuccess && <ModalSuccess message={successMsg} />}
            {error && <ModalError message={errorMsg} />}
        </Modal>
    );
};

export default ModalAddProduct;
