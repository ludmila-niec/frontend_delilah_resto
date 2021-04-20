import React, { useState, useEffect, useRef, useMemo } from "react";
import SearchBox from "../components/Search/SearchBox";
import ProductsList from "../components/Product/ProductCardList";
import Loading from "../components/common/Loading";
import { loadProducts } from "../redux/actions/productActions";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
//material ui
import { Typography, Box } from "@material-ui/core";
// image no data
import noDataImg from "../assets/status/error-404.png";
// style
import { useStyles } from "../components/Search/style/searchPage";

const Search = ({ products, loading, loadProducts }) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const loadProductsRef = useRef(() => {});
  const query = new URLSearchParams(useLocation().search).get("q");
  loadProductsRef.current = () => {
    loadProducts();
  };

  useEffect(() => {
    if (products.length === 0) {
      loadProductsRef.current();
    }
  }, [products.length]);

  useMemo(() => {
    const filteredProducts = products.filter((p) => {
      return `${p.name} ${p.description}`.toLowerCase().includes(query);
    });
    setResults(filteredProducts);
  }, [products, query]);

  const userHaveResults = results.length > 0;
  const noResults = (
    <Box
      className={classes.noResults__container}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="50vh"
      textAlign="center"
      padding="2rem"
    >
      <Typography className={classes.noResults__title}>
        No se encontraron resultados para la búsqueda
      </Typography>
      <Box alignSelf="center" className={classes.noResults__imgContainer}>
        <img src={noDataImg} alt="sin resultados" aria-hidden="true" />
      </Box>
    </Box>
  );

  if (loading) return <Loading />;

  return (
    <main style={{ minHeight: "100vh" }}>
      <div className={classes.container}>
        <SearchBox />
        <Typography variant="h2" className={classes.title}>
          Resultados para: "{query}"
        </Typography>
        {userHaveResults ? <ProductsList productList={results} /> : noResults}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
