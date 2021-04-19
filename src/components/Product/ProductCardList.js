import React from "react";

import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridAutoFlow: "dense",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            "& > div": {
                margin: 0,
            },
        },
    },
}));
const ProductCardList = ({ productList }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {productList.map((product) => (
                <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardList;
