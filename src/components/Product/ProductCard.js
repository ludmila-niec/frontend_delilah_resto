import React from "react";
import ProductCardLoading from "./ProductCardLoading";
import { Link as RouterLink } from "react-router-dom";

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
import useFavorite from "../../Hooks/useFavorite";

const ProductCard = ({ product, loading }) => {
    const classes = useStyles();
    const { product_id, name, img, description, price } = product;
    const {
        isFavorite,
        handleChangeFav,
        addedFavorite,
        deletedFavorite,
        openSnackbar,
        handleSnackbarClose,
    } = useFavorite(product_id);

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
