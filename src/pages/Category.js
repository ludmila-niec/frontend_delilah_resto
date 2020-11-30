import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/shop/SearchBox";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCardList from "../components/Product/ProductCardList";
import ProductCardLoading from "../components/Product/ProductCardLoading";
import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../actions/categoryActions";
import { getFavorites } from "../actions/favoriteActions";

const useStyles = makeStyles((theme) => ({
    containerLoading: {
        padding: "2rem 0",
    },
    titleLoading: {
        marginBottom: "2rem",
    },
}));

const Category = ({ match }) => {
    const classes = useStyles();
    //id value from path
    const categoryId = match.params.id;
    console.log(categoryId);
    const dispatch = useDispatch();
    const categoryData = useSelector((state) => state.categoryDetail);
    const { loading, categoryInfo, error } = categoryData;

    useEffect(() => {
        dispatch(getCategoryById(categoryId));
    }, [dispatch, categoryId]);
    console.log(categoryInfo);

    const addedFavorite = useSelector((state) => state.favoriteAdd);
    const deletedFavorite = useSelector((state) => state.favoriteDelete);
    //get lista de favoritos
    useEffect(() => {
        dispatch(getFavorites());
    }, [addedFavorite, deletedFavorite]);

    return (
        <Layout>
            <SearchBox />

            {loading && (
                <div className={classes.containerLoading}>
                    <Typography
                        variant="h5"
                        color="secondary"
                        className={classes.titleLoading}
                    >
                        Cargando los productos...
                    </Typography>
                    <ProductCardLoading />
                    <ProductCardLoading />
                </div>
            )}
            {categoryInfo && (
                <>
                    <CategoryCard
                        name={categoryInfo.data.name}
                        img={categoryInfo.data.img}
                    />
                    <ProductCardList productList={categoryInfo.data.Products} />
                </>
            )}
            {error && <ErrorNoData errorText="Error al cargar los productos" />}
        </Layout>
    );
};

export default Category;
