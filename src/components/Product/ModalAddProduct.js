import React from "react";
import Modal from "../common/Modal/Modal";
import ModalSuccess from "../common/Modal/ModalSuccess";

const successMsg = {
    title: "Producto agregado!",
    btnPrimary: "realizar pedido",
    btnSecondary: "agregar mas productos",
};

const ModalAddProduct = (props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onCloseModal}>
            <ModalSuccess
                message={successMsg}
                linkPrimary="/checkout"
                linkSecondary="/home"
            />
        </Modal>
    );
};

export default ModalAddProduct;
