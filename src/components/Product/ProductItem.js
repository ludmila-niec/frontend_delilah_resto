import React, { useState } from "react";
import ProductPicture from "./ProductPicture";
import ProductDetail from "./ProductDetail";
import ModalAddProduct from "./ModalAddProduct";
import { connect } from "react-redux";
import {
    addFavorite,
    deleteFavorite,
} from "../../redux/actions/favoriteActions";

const ProductItem = ({ product, favorites, addFavorite, deleteFavorite }) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <>
            <ProductPicture
                product={product}
                favorites={favorites}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}
            />
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

function mapStateToProps(state, ownProps) {
    return {
        product: ownProps.product,
        favorites: state.favorites,
    };
}

const mapDispatchToProps = {
    addFavorite,
    deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
