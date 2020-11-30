import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addFavorite,
    deleteFavorite,
    clearFavAction,
} from "../../actions/favoriteActions";
import {
    IconButton,
    FormControlLabel,
    Checkbox,
    Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Favorite, FavoriteBorder, ArrowBackIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    background: {
        minHeight: "50vh",
        backgroundColor: theme.palette.secondaryLighter.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "7rem",
        position: "relative",
    },
    img: {
        height: "65%",
        width: "65%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        margin: "2rem",
    },
    favBtn: {
        position: "absolute",
        right: "20px",
        top: "100px",
    },
    backBtn: {
        position: "absolute",
        left: "20px",
        top: "100px",
    },
    icon: {
        fontSize: "2.5rem",
    },
    skeleton: {
        height: "50vh",
        width: "100%",
    },
}));

const ProductPicture = ({ history, product }) => {
    const classes = useStyles();
    const { product_id, name, img } = product.data;

    const goBackRouter = () => {
        history.goBack();
    };

    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { favorites } = favoriteData;
    const addedFavorite = useSelector((state) => state.favoriteAdd);
    const deletedFavorite = useSelector((state) => state.favoriteDelete);
    const [isFavorite, setIsFavorite] = useState(false);

    //check si el productos por id se encuentra entre la lista de favoritos
    //para indicar el estado del checkbox
    useEffect(() => {
        const isFav = favorites.find((fav) => fav.product_id === product_id);
        if (isFav) {
            setIsFavorite(true);
        }
    }, [favorites, product_id]);
    //snackbar success/error
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        dispatch(clearFavAction());
    };
    // onChange de checkbox corazon add/delete fav
    const handleChangeFav = () => {
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

    useEffect(() => {
        if (addedFavorite.success) {
            setOpenSnackbar(true);

            console.log("success add + clear");
        }

        if (deletedFavorite.success) {
            setOpenSnackbar(true);
            console.log("success error + clear");
        }
    }, [addedFavorite, deletedFavorite]);
    return (
        <>
            <div className={classes.background}>
                <IconButton className={classes.backBtn} onClick={goBackRouter}>
                    <ArrowBackIos color="primary" className={classes.icon} />
                </IconButton>
                <FormControlLabel
                    control={
                        <Checkbox
                            className={classes.favBtn}
                            icon={
                                <FavoriteBorder
                                    color="secondary"
                                    className={classes.icon}
                                />
                            }
                            checkedIcon={
                                <Favorite
                                    color="secondary"
                                    className={classes.icon}
                                />
                            }
                            name="favorite"
                            checked={isFavorite}
                            onChange={handleChangeFav}
                        />
                    }
                />
                <img src={img} alt={name} className={classes.img} />
            </div>
            {addedFavorite.success && (
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                >
                    <Alert variant="filled" severity="success">
                        Favorito Agregado!
                    </Alert>
                </Snackbar>
            )}
            {deletedFavorite.success && (
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                >
                    <Alert variant="filled" severity="error">
                        Favorito Eliminado
                    </Alert>
                </Snackbar>
            )}
        </>
    );
};

export default withRouter(ProductPicture);
