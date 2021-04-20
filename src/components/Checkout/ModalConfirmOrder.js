import React from "react";
import Modal from "../Modal/Modal";
import ModalLoading from "../Modal/ModalLoading";
import ModalSuccess from "../Modal/ModalSuccess";
// import ModalError from "../common/Modal/ModalError";

const loadingMsg = {
  title: " Estamos procesando tu pedido...",
};

const successMsg = {
  title: "Recibimos tu Pedido!",
  textInfo: "Gracias por hacer tu pedido en Delilah!",
  btnPrimary: "seguir pedido",
  btnSecondary: "ir al inicio",
};

// const errorMsg = {
//     title: "Error al intentar realizar el pedido",
//     btnClose: "cerrar",
// };

const ModalConfirmOrder = ({ isOpen, onCloseModal, loading, newOrder }) => {
  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      {loading ? (
        <ModalLoading message={loadingMsg} />
      ) : (
        <ModalSuccess
          message={successMsg}
          linkPrimary={`/order/${newOrder.order_id}`}
          linkSecondary={"/home"}
        />
      )}
      {/* {error && <ModalError message={errorMsg} />} */}
    </Modal>
  );
};

export default ModalConfirmOrder;
