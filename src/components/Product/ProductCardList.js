import React from "react";
import ProductCard from "./ProductCard";
// style
import { useStyles } from "./style/productCardList";

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
