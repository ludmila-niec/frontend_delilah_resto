import React from "react";
import FavItem from "./FavItem";
import Carousel from "./Carousel";

const FavGroup = ({ favorites }) => {
    return (
        <Carousel>
            {favorites.map((product) => (
                <FavItem key={product.product_id} product={product} />
            ))}
        </Carousel>
    );
};

export default FavGroup;
