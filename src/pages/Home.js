import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/common/Layout";
import SearchBox from "../components/Home/SearchBox";
import FavSection from "../components/Home/Favorite/FavSection";
import CategoriesSection from "../components/Home/Category/CategoriesSection";
import Loading from "../components/common/Loading";
import { connect } from "react-redux";
import { loadFavorites } from "../redux/actions/favoriteActions";
import { loadCategories } from "../redux/actions/categoryActions";
import { withRouter } from "react-router-dom";

function Home({
    favorites,
    categories,
    loading,
    loadFavorites,
    loadCategories,
}) {
    const [error, setError] = useState({
        favoritesError: "",
        categoriesError: "",
    });
    const prevFavorites = useRef([]);

    useEffect(() => {
        if (favorites.length === 0) {
            loadFavorites().catch((error) => {
                setError((currentErrors) => {
                    return {
                        ...currentErrors,
                        favoritesError: "Error al cargar los favoritos",
                    };
                });
                console.log(error.response);
            });
            return (prevFavorites.current = favorites);
        } else if (areEqual(prevFavorites.current, favorites)) {
            return;
        } else {
            return (prevFavorites.current = favorites);
        }
    }, [favorites]);

    useEffect(() => {
        console.log("effect categorias");
        if (categories.length === 0) {
            loadCategories().catch((error) => {
                setError((currentErrors) => {
                    return {
                        ...currentErrors,
                        categoriesError: "Error al cargar los favoritos",
                    };
                });
                console.log(error.response);
            });
        }
    }, []);

    return (
        <Layout>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <SearchBox />
                    {favorites.length > 0 && (
                        <FavSection favorites={favorites} />
                    )}
                    {/* {error.favorites && <p>{error.favorites}</p>} */}

                    <CategoriesSection categories={categories} />
                </>
            )}
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites,
        categories: state.categories,
        loading: state.apiCallsInProgress > 0,
    };
}
const mapDispatchToProps = {
    loadFavorites,
    loadCategories,
};

//checks if the array of favorites have changed
function areEqual(array1, array2) {
    return (
        array1.length === array2.length &&
        array1.every((value, index) => value === array2[index])
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
