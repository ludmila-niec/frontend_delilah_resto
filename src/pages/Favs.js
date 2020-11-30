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
    const deletedFavorite = useSelector((state) => state.favoriteDelete);
    useEffect(() => {
        dispatch(getFavorites());
    }, [deletedFavorite.success]);

    return (
        <Layout>
            <Typography variant="h5">Mis favoritos</Typography>
            {loading && <p>Cargando tus favoritos...</p>}
            {favorites && (
                <>
                    {favorites.length > 0 ? (
                        <FavList productList={favorites} loading={loading} />
                    ) : (
                        <FavsEmpty />
                    )}
                </>
            )}
            {error && <ErrorNoData errorText="Error al cargar los favoritos" />}
        </Layout>
    );
};

export default Favs;
