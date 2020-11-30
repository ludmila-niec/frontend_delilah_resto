import React, { useState, useEffect } from "react";
import ProductCardLoading from "./ProductCardLoading";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
    addFavorite,
    deleteFavorite,
    clearFavAction,
} from "../../actions/favoriteActions";
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Link,
    Fade,
    FormControlLabel,
    Checkbox,
    Snackbar,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

import useStyles from "./productCardStyle";

const ProductCard = ({ product, loading }) => {
    const classes = useStyles();
    const { product_id, name, img, description, price } = product;
    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { favorites } = favoriteData;
    const addedFavorite = useSelector((state) => state.favoriteAdd);
    const deletedFavorite = useSelector((state) => state.favoriteDelete);

    //checkbox value
    const [isFavorite, setIsFavorite] = useState(false);

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

    //check si el productos por id se encuentra entre la lista de favoritos
    //para indicar el estado del checkbox

    useEffect(() => {
        const isFav = favorites.find((fav) => fav.product_id === product_id);
        if (isFav) {
            setIsFavorite(true);
        }
    }, [favorites, product_id]);

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
            {loading ? (
                <ProductCardLoading />
            ) : (
                <Fade in={!loading}>
                    <Card
                        elevation={0}
                        className={classes.container}
                        style={{
                            boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Link
                            className={classes.linkCard}
                            component={RouterLink}
                            to={`/product/${product_id}`}
                        >
                            <CardActionArea className={classes.cardContent}>
                                <div className={classes.background}>
                                    <CardMedia
                                        image={img}
                                        title={name}
                                        className={classes.productImg}
                                    />
                                </div>
                                <CardContent className={classes.productData}>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary"
                                        className={classes.productTitle}
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="secondary"
                                        gutterBottom
                                    >
                                        ${price}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.productDescription}
                                    >
                                        {description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.icon}
                                    icon={<FavoriteBorder color="secondary" />}
                                    checkedIcon={<Favorite color="secondary" />}
                                    name="favorite"
                                    checked={isFavorite}
                                    onChange={handleChangeFav}
                                />
                            }
                        />
                    </Card>
                </Fade>
            )}
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

export default ProductCard;
