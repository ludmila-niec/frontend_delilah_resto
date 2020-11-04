import React from "react";
import FavItem from "./FavItem";

import BaseCarousel from "./Carousel";

const FavGroup = () => {
    return (
        <BaseCarousel>
            <FavItem />
            <FavItem />
            <FavItem />
        </BaseCarousel>
    );
};

export default FavGroup;
