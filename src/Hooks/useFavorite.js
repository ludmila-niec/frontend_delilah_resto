import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addFavorite,
    deleteFavorite,
    clearFavAction,
} from "../actions/favoriteActions";

const useFavorite = (product_id) => {
    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { favorites } = favoriteData;
    const addedFavorite = useSelector((state) => state.favoriteAdd);
    const deletedFavorite = useSelector((state) => state.favoriteDelete);

    //checkbox value
    const [isFavorite, setIsFavorite] = useState(false);

    //check favorites on load and display checked/unchecked
    useEffect(() => {
        const isFav = favorites.find((fav) => fav.product_id === product_id);
        if (isFav) {
            setIsFavorite(true);
        }
    }, [favorites, product_id]);

    // handle change favorite
    const handleChangeFav = () => {
        console.log("producto antes del dispatch");
        if (isFavorite) {
            console.log("cambio a false");
            //cambiar estado del checkboxIcon
            setIsFavorite(false);
            //eliminar favorito
            dispatch(deleteFavorite(product_id));
        } else {
            console.log("cambio a true");
            //cambiar estado del checkboxIcon
            setIsFavorite(true);
            //agregar favorito

            dispatch(addFavorite(product_id));
        }
    };

    //notify action with snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        dispatch(clearFavAction());
    };

    useEffect(() => {
        if (addedFavorite.success) {
            setOpenSnackbar(true);

            console.log("success add + clear");
        }

        if (deletedFavorite.success) {
            setOpenSnackbar(true);
            console.log("success delete + clear");
        }
    }, [addedFavorite, deletedFavorite]);

    return {
        isFavorite,
        handleChangeFav,
        addedFavorite,
        deletedFavorite,
        openSnackbar,
        handleSnackbarClose,
    };
};

export default useFavorite;
