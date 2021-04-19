import React, { useEffect, useRef } from "react";
import SearchBox from "../components/Home/SearchBox";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCardList from "../components/Product/ProductCardList";
import ProductCardLoading from "../components/Product/ProductCardLoading";
// import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { loadCategories } from "../redux/actions/categoryActions";

const useStyles = makeStyles((theme) => ({
  containerLoading: {
    padding: "2rem 0",
  },
  titleLoading: {
    marginBottom: "2rem",
  },
  container: {
    padding: "8rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "8rem 4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "8rem",
    },
  },
}));

const Category = ({ categories, categoryInfo, loading, loadCategories }) => {
  const classes = useStyles();
  const loadCategoriesRef = useRef(() => {});

  loadCategoriesRef.current = () => {
    loadCategories();
  };
  useEffect(() => {
    if (categories.length === 0) {
      loadCategoriesRef.current();
    }
  }, [categories.length]);

  if (categoryInfo.length === 0) return <h1>nada por aqui</h1>;

  return (
    <div className={classes.container}>
      <SearchBox />

      {loading && (
        <div className={classes.containerLoading}>
          <Typography
            variant="h5"
            color="secondary"
            className={classes.titleLoading}
          >
            Cargando los productos...
          </Typography>
          <ProductCardLoading />
          <ProductCardLoading />
        </div>
      )}
      {categoryInfo && (
        <>
          <CategoryCard name={categoryInfo.name} img={categoryInfo.img} />
          <ProductCardList productList={categoryInfo.Products} />
        </>
      )}
      {/* {error && <ErrorNoData errorText="Error al cargar los productos" />} */}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const categoryId = ownProps.match.params.id;
  return {
    categories: state.categories,
    categoryInfo:
      state.categories.length === 0
        ? []
        : // eslint-disable-next-line
          state.categories.find((c) => c.category_id == categoryId),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
