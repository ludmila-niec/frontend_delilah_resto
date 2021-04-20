import React, { useEffect, useRef } from "react";
import ProductInfo from "../components/ProductPage/Product";
import ProductLoading from "../components/ProductPage/ProductLoading";
// redux
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
// style
import {useStyles} from '../components/ProductPage/style/productPage'


const Product = ({ products, product, loading, loadProducts }) => {
  const classes = useStyles();
  const loadProductsRef = useRef(() => {});

  loadProductsRef.current = () => {
    loadProducts();
  };
  useEffect(() => {
    if (products.length === 0) {
      loadProductsRef.current();
    }
  }, [products.length]);
  // if (error) return <ErrorNoData errorText="Error al cargar el producto" />;
  return (
    <main>
      <div className={classes.container}>
        {loading && <ProductLoading />}
        <div className={classes.productCard}>
          {product && <ProductInfo product={product} />}
        </div>
      </div>
    </main>
  );
};

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.id;
  return {
    products: state.products,
    product:
      state.products.length === 0
        ? []
        : // eslint-disable-next-line
          state.products.find((p) => p.product_id == productId),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
