import React, { useEffect, useRef } from "react";
// import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import FavsEmpty from "../components/Fav/FavsEmpty";
import ProductList from "../components/Product/ProductCardList";
import Loading from "../components/common/Loading";
// redux
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { loadFavorites } from "../redux/actions/favoriteActions";
// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    intro: {
        minHeight: "80vh",
        position: "relative",
    },
    intro__bg: {
        position: "absolute",
        zIndex: -10,
        height: "100%",
        width: "100%",

        "& div:first-child": {
            height: "75%",
            backgroundColor: theme.palette.secondaryLighter.main,
            opacity: "50%",
        },
        "& div:last-child": {
            height: "25%",
            backgroundColor: "#F9F6F0",
            opacity: "50%",
        },
        [theme.breakpoints.up("sm")]: {
            display: "flex",

            "& div:first-child": {
                height: "100%",
                width: "75%",
            },

            "& div:last-child": {
                height: "100%",
                width: "25%",
            },
        },
    },
    container: {
        padding: "8rem 2rem",
        [theme.breakpoints.up("sm")]: {
            padding: "8rem 4rem",
        },
    },
    container__title: {
        fontSize: "2rem",
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "capitalize",
        color: "#214C8A",
        marginBottom: theme.spacing(1),

        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",

            "& + p": {
                fontSize: "1.5rem",
            },
        },
    },
}));

const Favs = ({
    products,
    favorites,
    loading,
    loadProducts,
    loadFavorites,
}) => {
    const classes = useStyles();
    useEffect(() => {
        if (products.length === 0) {
            loadProducts();
        }
    }, []);
    // const prevFavorites = useRef([]);
    // useEffect(() => {
    //     if (favorites.length === 0) {
    //         loadFavorites();
    //         return (prevFavorites.current = favorites);
    //     } else if (areEqual(prevFavorites.current, favorites)) {
    //         return;
    //     } else {
    //         return (prevFavorites.current = favorites);
    //     }
    // }, [favorites]);
    useEffect(() => {
        if (favorites.length === 0) {
            loadFavorites();
        }
    }, []);

    const userHaveFavorites = favorites.length > 0;

    if (loading) {
        return <Loading />;
    }

    // if (error) {
    //     return <ErrorNoData errorText="Error al cargar los favoritos" />;
    // }

    return (
        <main>
            <div className={classes.intro}>
                <div className={classes.intro__bg}>
                    <div></div>
                    <div></div>
                </div>
                <div className={classes.container}>
                    <Typography
                        variant="h2"
                        className={classes.container__title}
                    >
                        Mis favoritos
                    </Typography>
                    {userHaveFavorites ? (
                        <ProductList productList={favorites} />
                    ) : (
                        <FavsEmpty />
                    )}
                </div>
            </div>
        </main>
    );
};

function mapStateToProps(state) {
    return {
        products: state.products,
        favorites:
            state.products.length == 0
                ? []
                : state.favorites.map((f) =>
                      state.products.find((p) => p.product_id === f.product_id)
                  ),
        categories: state.categories,
        loading: state.apiCallsInProgress > 0,
    };
}

const mapDispatchToProps = {
    loadProducts,
    loadFavorites,
};

//checks if the array of favorites have changed
function areEqual(array1, array2) {
    return (
        array1.length === array2.length &&
        array1.every((value, index) => value === array2[index])
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favs);
