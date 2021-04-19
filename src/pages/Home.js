import React, { useEffect, useRef } from "react";
import SearchBox from "../components/Home/SearchBox";
import DealSection from "../components/Home/Deal/DealSection";
import FavSection from "../components/Home/Favorite/FavSection";
import CategoriesSection from "../components/Home/Category/CategoriesSection";
import Loading from "../components/common/Loading";
//assets/img
import productImg from "../assets/ensalada.png";

//material-ui
import { Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//redux
import { connect } from "react-redux";
import { loadFavorites } from "../redux/actions/favoriteActions";
import { loadCategories } from "../redux/actions/categoryActions";
import { loadProducts } from "../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
  intro: {
    height: "80vh",
    position: "relative",

    [theme.breakpoints.up("sm")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  intro__bg: {
    position: "absolute",
    zIndex: -10,
    height: "100%",
    width: "100%",

    "& div:first-child": {
      height: "75%",
      backgroundColor: theme.palette.secondaryLighter.main,
      opacity: "50%",
    },
    "& div:last-child": {
      height: "25%",
      backgroundColor: "#F9F6F0",
      opacity: "50%",
    },

    [theme.breakpoints.up("sm")]: {
      display: "flex",

      "& div:first-child": {
        height: "100%",
        width: "75%",
      },

      "& div:last-child": {
        height: "100%",
        width: "25%",
      },
    },
  },
  container: {
    padding: "8rem 2rem 1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  container__wrapper: {
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  container__title: {
    fontSize: "2.5rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      fontSize: "4rem",

      "& + p": {
        fontSize: "1.5rem",
      },
    },
  },
  productImg: {
    height: "250px",
    width: "250px",
    display: "block",
    margin: "1rem auto",
    filter: "drop-shadow(0px 11px 7px rgba(0,0,0,0.3))",

    [theme.breakpoints.up("sm")]: {
      height: "350px",
      width: "350px",
      marginRight: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
      width: "500px",
      marginRight: "0px",
    },
  },

  chipContainer: {
    padding: "3rem 2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    "& > div": {
      margin: "0.5rem",
      textTransform: "capitalize",
    },

    [theme.breakpoints.up("sm")]: {
      "& > div": {
        fontSize: "1rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
}));

function Home({
  history,
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
    if (products.length === 0) {
      loadProductsRef.current();
    }
  }, [products.length]);

  useEffect(() => {
    if (favorites.length === 0) {
      loadFavoritesRef.current();
    }
  }, [favorites.length]);

  useEffect(() => {
    if (categories.length === 0) {
      loadCategoriesRef.current();
    }
  }, [categories.length]);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
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
          <div className={classes.chipContainer}>
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
          <DealSection products={products} />
          {favorites.length > 0 && <FavSection favorites={favorites} />}
          <CategoriesSection categories={categories} />
        </>
      )}
    </main>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    history: ownProps.history,
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
