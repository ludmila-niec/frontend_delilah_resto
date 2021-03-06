import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import SearchBox from "../components/Home/SearchBox";
import FavSection from "../components/Home/Favorite/FavSection";
import CategoriesSection from "../components/Home/Category/CategoriesSection";
import Loading from "../components/common/Loading";

//router
import { Link as RouterLink } from "react-router-dom";
//material-ui
import { Typography, Link } from "@material-ui/core";
//redux
import { connect } from "react-redux";
import { loadFavorites } from "../redux/actions/favoriteActions";
import { loadCategories } from "../redux/actions/categoryActions";
import { loadProducts } from "../redux/actions/productActions";

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
    useEffect(() => {
        if (favorites.length === 0) {
            loadFavorites();
        }

        if (products.length === 0) {
            loadProducts();
        }

        if (categories.length === 0) {
            loadCategories();
        }
    }, []);

    return (
        <Layout>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <SearchBox />
                    <Typography variant="h2" color="primary">
                        Hola!
                    </Typography>
                    <Typography>Qué vas a pedir hoy?</Typography>
                    <Link component={RouterLink} to="orders">
                        Mis pedidos
                    </Link>
                    {favorites.length > 0 && (
                        <FavSection favorites={favorites} />
                    )}

                    <CategoriesSection categories={categories} />
                </>
            )}
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userLogin.user.data,
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
    loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
