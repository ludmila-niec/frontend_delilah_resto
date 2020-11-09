import React from "react";
import ProductItem from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "3rem 0",
    },
}));
const ProductCardList = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
};

export default ProductCardList;
