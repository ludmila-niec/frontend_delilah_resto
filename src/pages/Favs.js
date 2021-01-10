import React, { useEffect, useRef } from "react";
import Layout from "../components/common/Layout";
// import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import FavsEmpty from "../components/Fav/FavsEmpty";
import FavList from "../components/Fav/FavList";
import ProductList from "../components/Product/ProductCardList";
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { loadFavorites } from "../redux/actions/favoriteActions";
import Loading from "../components/common/Loading";

const Favs = ({
    products,
    favorites,
    loading,
    loadProducts,
    loadFavorites,
}) => {
    useEffect(() => {
        if (products.length === 0) {
            loadProducts();
        }
    }, []);
    // const prevFavorites = useRef([]);
    // useEffect(() => {
    //     if (favorites.length === 0) {
    //         loadFavorites();
    //         return (prevFavorites.current = favorites);
    //     } else if (areEqual(prevFavorites.current, favorites)) {
    //         return;
    //     } else {
    //         return (prevFavorites.current = favorites);
    //     }
    // }, [favorites]);
    useEffect(() => {
        if (favorites.length === 0) {
            loadFavorites();
        }
    }, []);

    const userHaveFavorites = favorites.length > 0;

    if (loading) {
        return (
            <Layout>
                <Typography variant="h5">Mis favoritos</Typography>
                <p>Cargando tus favoritos...</p>
            </Layout>
        );
    }

    // if (error) {
    //     return <ErrorNoData errorText="Error al cargar los favoritos" />;
    // }

    return (
        <Layout>
            <Typography variant="h5">Mis favoritos</Typography>
            {userHaveFavorites ? (
                <ProductList productList={favorites} />
            ) : (
                <FavsEmpty />
            )}
        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        products: state.products,
        favorites:
            state.products.length == 0
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

//checks if the array of favorites have changed
function areEqual(array1, array2) {
    return (
        array1.length === array2.length &&
        array1.every((value, index) => value === array2[index])
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
