import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/shop/SearchBox";
import FavSection from "../components/shop/Favorite/FavSection";
import CategoriesSection from "../components/shop/Category/CategoriesSection";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../actions/favoriteActions";

const Home = () => {
    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { favorites, error } = favoriteData;
    //favorites request
    //if empty, don't show favorite section
    useEffect(() => {
        dispatch(getFavorites());
    }, []);
    console.log(favorites);
    return (
        <Layout>
            <SearchBox />
            {favorites && <>{favorites.length > 0 && <FavSection />}</>}
            {error && <p>Error al cargar los favoritos</p>}
            <CategoriesSection />
        </Layout>
    );
};

export default Home;
