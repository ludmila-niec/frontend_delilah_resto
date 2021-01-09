import React from "react";
import { withRouter } from "react-router-dom";
import {
    IconButton,
    FormControlLabel,
    Checkbox,
    Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Favorite, FavoriteBorder, ArrowBackIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useFavorite from "../../Hooks/useFavorite";

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

const ProductPicture = ({
    history,
    product,
    favorites,
    addFavorite,
    deleteFavorite,
}) => {
    const classes = useStyles();
    const { product_id, name, img } = product;

    const goBackRouter = () => {
        history.goBack();
    };

    const {
        isFavorite,
        handleChangeFav,
        // addedFavorite,
        // deletedFavorite,
        // openSnackbar,
        // handleSnackbarClose,
    } = useFavorite(product_id, favorites, addFavorite, deleteFavorite);

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
            {/* {addedFavorite.success && (
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                >
                    <Alert variant="filled" severity="success">
                        Favorito Agregado!
                    </Alert>
                </Snackbar>
            )} */}
            {/* {deletedFavorite.success && (
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                >
                    <Alert variant="filled" severity="error">
                        Favorito Eliminado
                    </Alert>
                </Snackbar>
            )} */}
        </>
    );
};

export default withRouter(ProductPicture);
