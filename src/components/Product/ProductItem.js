import React, { useState } from "react";
import ProductPicture from "./ProductPicture";
import ProductDetail from "./ProductDetail";
import ModalAddProduct from "./ModalAddProduct";

const ProductItem = ({ product, loading }) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <>
            <ProductPicture product={product} loading={loading} />
            <ProductDetail product={product} onOpenModal={handleOpenModal} />
            {isOpen && (
                <ModalAddProduct
                    onCloseModal={handleCloseModal}
                    isOpen={isOpen}
                />
            )}
        </>
    );
};

export default ProductItem;
