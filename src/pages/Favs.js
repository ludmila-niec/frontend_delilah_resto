import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import FavsEmpty from "../components/Fav/FavsEmpty";
import FavList from "../components/Fav/FavList";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../actions/favoriteActions";

const Favs = () => {
    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { loading, favorites, error } = favoriteData;

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    const userHaveFavorites = favorites.length > 0;
    console.log(userHaveFavorites);

    if (loading) {
        return (
            <Layout>
                <Typography variant="h5">Mis favoritos</Typography>
                <p>Cargando tus favoritos...</p>
            </Layout>
        );
    }

    if (error) {
        return <ErrorNoData errorText="Error al cargar los favoritos" />;
    }

    return (
        <Layout>
            <Typography variant="h5">Mis favoritos</Typography>
            {userHaveFavorites ? (
                <FavList productList={favorites} loading={loading} />
            ) : (
                <FavsEmpty />
            )}
        </Layout>
    );
};

export default Favs;
