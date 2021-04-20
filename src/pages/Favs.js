import React, { useEffect, useRef } from "react";
// import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import FavsEmpty from "../components/FavsPage/FavsEmpty";
import ProductList from "../components/Product/ProductCardList";
import Loading from "../components/common/Loading";
// redux
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { loadFavorites } from "../redux/actions/favoriteActions";
// material-ui
import { useStyles } from "../components/FavsPage/style/favPage";

const Favs = ({
  products,
  favorites,
  loading,
  loadProducts,
  loadFavorites,
}) => {
  const classes = useStyles();
  const loadProductsRef = useRef(() => {});
  const loadFavoritesRef = useRef(() => {});

  loadProductsRef.current = () => {
    loadProducts();
  };

  loadFavoritesRef.current = () => {
    loadFavorites();
  };
  useEffect(() => {
    if (products.length === 0) {
      loadProductsRef.current();
    }
  }, [products.length]);

  useEffect(() => {
    if (favorites.length === 0) {
      loadFavoritesRef.current();
    }
  }, [favorites.length]);

  const userHaveFavorites = favorites.length > 0;

  if (loading) return <Loading />;

  // if (error) {
  //     return <ErrorNoData errorText="Error al cargar los favoritos" />;
  // }

  return (
    <main>
      <div className={classes.intro}>
        <div className={classes.intro__bg}>
          <div></div>
          <div></div>
        </div>
        <div className={classes.container}>
          <Typography variant="h2" className={classes.container__title}>
            Mis favoritos
          </Typography>
          {userHaveFavorites ? (
            <ProductList productList={favorites} />
          ) : (
            <FavsEmpty />
          )}
        </div>
      </div>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products,
    favorites:
      state.products.length === 0
        ? []
        : state.favorites.map((f) =>
            state.products.find((p) => p.product_id === f.product_id)
          ),
    categories: state.categories,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadProducts,
  loadFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
