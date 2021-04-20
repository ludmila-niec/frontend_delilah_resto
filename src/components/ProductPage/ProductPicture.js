import React from "react";
import useFavorite from "../../Hooks/useFavorite";
import { withRouter } from "react-router-dom";
import {
  IconButton,
  FormControlLabel,
  Checkbox,
  // Snackbar,
} from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
import { Favorite, FavoriteBorder, ArrowBackIos } from "@material-ui/icons";
import { useStyles } from "./style/productPicture";

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
      <div className={classes.wrapper}>
        <IconButton className={classes.backBtn} onClick={goBackRouter}>
          <ArrowBackIos color="primary" className={classes.icon} />
        </IconButton>
        <FormControlLabel
          control={
            <Checkbox
              className={classes.favBtn}
              icon={
                <FavoriteBorder color="secondary" className={classes.icon} />
              }
              checkedIcon={
                <Favorite color="secondary" className={classes.icon} />
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
