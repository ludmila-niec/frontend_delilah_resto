import React from "react";
import FavCard from "./FavCard";
import Carousel from "../../Carousel/Carousel";

const FavGroup = ({ favorites }) => {
    return (
        <Carousel>
            {favorites.map((product) => (
                <FavCard key={product.product_id} product={product} />
            ))}
        </Carousel>
    );
};

export default FavGroup;
