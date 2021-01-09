import { useState, useEffect } from "react";

const useFavorite = (product_id, favorites, addFavorite, deleteFavorite) => {
    //checkbox value
    const [isFavorite, setIsFavorite] = useState(false);
    // const [message, setMessage] = useState("");
    //notify action with snackbar
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
    //notify with message addes/deleted
    let message;
    //check favorites on load and display checked/unchecked
    useEffect(() => {
        const isFav = favorites.some((f) => f === product_id);
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
            message = "Favorito Eliminado";
            setIsOpenSnackbar(true);
            //eliminar favorito
            deleteFavorite(product_id);
        } else {
            console.log("cambio a true");
            //cambiar estado del checkboxIcon
            setIsFavorite(true);
            message = "Favorito agregado";
            setIsOpenSnackbar(true);
            //agregar favorito
            addFavorite(product_id);
        }
    };

    const handleSnackbarClose = () => {
        setIsOpenSnackbar(false);
    };

    return {
        isFavorite,
        message,
        isOpenSnackbar,
        handleChangeFav,
        handleSnackbarClose,
    };
};

export default useFavorite;
