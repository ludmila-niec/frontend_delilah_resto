import React from "react";
import ProductCardLoading from "./ProductCardLoading";
import useFavorite from "../../Hooks/useFavorite";
// react-router
import { Link as RouterLink } from "react-router-dom";
// material-ui
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
// redux
import { connect } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/actions/favoriteActions";
// style
import { useStyles } from "./style/productCard";

const ProductCard = ({
  product,
  favorites,
  loading,
  addFavorite,
  deleteFavorite,
}) => {
  const classes = useStyles();
  const { product_id, name, img, description, price } = product;
  const {
    isFavorite,
    message,
    isOpenSnackbar,
    handleChangeFav,
    handleSnackbarClose,
  } = useFavorite(product_id, favorites, addFavorite, deleteFavorite);

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

      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          {message}
        </Alert>
      </Snackbar>

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
function mapStateToProps(state) {
  return {
    favorites: state.favorites,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  addFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
