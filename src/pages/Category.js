import React, { useEffect, useRef } from "react";
import SearchBox from "../components/Search/SearchBox";
import CategoryHeader from "../components/CategoryPage/CategoryHeader";
import ProductCardList from "../components/Product/ProductCardList";
import Loading from "../components/common/Loading";
// import ErrorNoData from "../components/ErrorNoData";
import { connect } from "react-redux";
import { loadCategories } from "../redux/actions/categoryActions";
import { useStyles } from "../components/CategoryPage/style/categoryPage";

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

  if (loading) return <Loading />;
  if (categoryInfo.length === 0) return <h1>nada por aqui</h1>;
  return (
    <div className={classes.container}>
      <SearchBox />
      {categoryInfo && (
        <>
          <CategoryHeader name={categoryInfo.name} img={categoryInfo.img} />
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
