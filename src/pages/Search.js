import React, { useState, useEffect, useRef, useMemo } from "react";
import SearchBox from "../components/Home/SearchBox";
import ProductsList from "../components/Product/ProductCardList";
import Loading from "../components/common/Loading";
import { loadProducts } from "../redux/actions/productActions";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
//material ui
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// image no data
import noDataImg from '../assets/status/error-404.png'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8rem 2rem",
    [theme.breakpoints.up("md")]: {
      padding: "8rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10rem",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    paddingTop: "2rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      padding: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
    },
  },
  noResults__container:{
    padding:"2rem",
    height:'50vh',
    [theme.breakpoints.up('sm')]:{
      padding:"3rem",
    },
    [theme.breakpoints.up('lg')]:{
      height:"60vh"
    }
  },
  noResults__title:{
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]:{
      fontSize:"1.5rem"
    },
    [theme.breakpoints.up('md')]:{
      fontSize:"2rem"
    },
  },
  noResults__imgContainer:{
    height:"200px",
    width:"200px",
    "& > img":{
      height:"100%"
    },
    [theme.breakpoints.up('sm')]:{
      height:"60%",
      width:"60%",
    }
  }
}));

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
    <Box className={classes.noResults__container} display='flex' flexDirection='column' justifyContent='space-between'
    height='50vh' textAlign='center' padding='2rem'>
      <Typography  className={classes.noResults__title}>No se encontraron resultados para la búsqueda</Typography>
      <Box alignSelf='center' className={classes.noResults__imgContainer}>
        <img src={noDataImg} alt='sin resultados' aria-hidden='true' />
      </Box>
    </Box>
  )

  return (
    <main style={{ minHeight: "100vh" }}>
      <div className={classes.container}>
        <SearchBox />
        <Typography variant="h2" className={classes.title}>
          Resultados para: "{query}"
        </Typography>
        {loading ? (
          <Loading />
        ) : userHaveResults ? (
          <ProductsList productList={results} />
        ) : (
          noResults
        )}
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
