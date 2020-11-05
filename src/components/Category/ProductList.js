import React from "react";
import ProductItem from "./ProductItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "2rem 0",
    },
}));
const ProductList = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <hr style={{ opacity: "0.2" }} />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
};

export default ProductList;
