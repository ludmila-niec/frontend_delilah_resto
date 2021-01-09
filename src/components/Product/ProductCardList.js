import React from "react";

import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "3rem 0",
    },
}));
const ProductCardList = ({ productList }) => {
    const classes = useStyles();
    console.log(productList);
    return (
        <div className={classes.container}>
            {productList.map((product) => (
                <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardList;
