import React from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "3rem 0",
    },
}));
const ProductCardList = ({ productList, loading }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {loading && <p>Cargando los productos...</p>}
            {productList.map((product) => (
                <ProductCard
                    key={product.product_id}
                    product={product}
                    loading={loading}
                />
            ))}
        </div>
    );
};

export default ProductCardList;
