import React from "react";
import ProductCardList from "../Product/ProductCardList";

const FavList = ({ productList, loading }) => {
    return (
        <>
            <ProductCardList productList={productList} loading={loading} />
        </>
    );
};

export default FavList;
