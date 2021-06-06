import React, { useEffect, useRef } from "react";
import Loading from "../components/common/Loading";
import Products from "../components/Admin/Products/AdminProducts";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import { useStyles } from "../components/Admin/styles/adminProducts";
// redux
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";

// react router
import { Link as RouterLink } from "react-router-dom";

const AdminProducts = ({ loading, products, loadProducts }) => {
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

  if (loading) return <Loading />;
  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.container__title}>
          Productos
        </Typography>
        <Breadcrumbs className={classes.container__nav}>
          <Link component={RouterLink} to="/admin" color="textPrimary">
            Ordenes
          </Link>
          <Link component={RouterLink} to="/admin/products" color="primary">
            Productos
          </Link>
          <Link component={RouterLink} to="/admin/users" color="textPrimary">
            Usuarios
          </Link>
        </Breadcrumbs>
        <Products products={products} />
      </div>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products,
    loading: state.apiCallsInProgress > 0,
  };
}
const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
