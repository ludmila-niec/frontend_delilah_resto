import React, { useEffect, useRef } from "react";
import SearchBox from "../components/Search/SearchBox";
import DealSection from "../components/Home/DealSection/DealSection";
import FavSection from "../components/Home/FavoriteSection/FavSection";
import CategoriesSection from "../components/Home/CategoriesSection/CategoriesSection";
import Loading from "../components/common/Loading";
import { useHistory } from "react-router-dom";
//assets/img
import productImg from "../assets/ensalada.png";
//material-ui
import { Typography, Chip } from "@material-ui/core";
//redux
import { connect } from "react-redux";
import { loadFavorites } from "../redux/actions/favoriteActions";
import { loadCategories } from "../redux/actions/categoryActions";
import { loadProducts } from "../redux/actions/productActions";
// style
import { useStyles } from "../components/Home/style/homePage";

function Home({
  user,
  products,
  favorites,
  categories,
  loading,
  loadProducts,
  loadFavorites,
  loadCategories,
}) {
  const classes = useStyles();
  const loadFavoritesRef = useRef(() => {});
  const loadCategoriesRef = useRef(() => {});
  const loadProductsRef = useRef(() => {});
  const history = useHistory();

  loadFavoritesRef.current = () => {
    loadFavorites();
  };

  loadCategoriesRef.current = () => {
    loadCategories();
  };

  loadProductsRef.current = () => {
    loadProducts();
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      loadProductsRef.current();
    }
  }, [products.length]);

  useEffect(() => {
    loadFavoritesRef.current();
  }, [favorites.length]);

  useEffect(() => {
    if (categories.length === 0) {
      loadCategoriesRef.current();
    }
  }, [categories.length]);

  if (loading) return <Loading />;

  return (
    <main>
      <>
        <div className={classes.intro}>
          <div className={classes.intro__bg}>
            <div></div>
            <div></div>
          </div>
          <div className={classes.container}>
            <div className={classes.container__wrapper}>
              <Typography variant="h2" className={classes.container__title}>
                Hola {user.firstName}!
              </Typography>
              <Typography color="secondary">Qué vas a pedir hoy?</Typography>
              <SearchBox />
            </div>
            <img
              src={productImg}
              alt="ensalada modo ilustrativo"
              className={classes.productImg}
            />
          </div>
        </div>
        <div className={classes.chip__container}>
          <div className={classes.chip__wrapper}>
            {categories.map((category) => {
              const { category_id, name } = category;
              return (
                <Chip
                  label={name}
                  key={category_id}
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    history.push(`/category/${name}/${category_id}`)
                  }
                />
              );
            })}
          </div>
        </div>
        <hr style={{ opacity: "0.2" }} />
        <DealSection products={products} />
        {favorites.length > 0 && <FavSection favorites={favorites} />}
        <CategoriesSection categories={categories} />
      </>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userLogin.user,
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
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
