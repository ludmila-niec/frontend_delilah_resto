import React, { useEffect } from "react";
import Layout from "../components/common/Layout";
import SearchBox from "../components/Home/SearchBox";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCardList from "../components/Product/ProductCardList";
import ProductCardLoading from "../components/Product/ProductCardLoading";
// import ErrorNoData from "../components/ErrorNoData";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { loadCategories } from "../redux/actions/categoryActions";

const useStyles = makeStyles((theme) => ({
    containerLoading: {
        padding: "2rem 0",
    },
    titleLoading: {
        marginBottom: "2rem",
    },
}));

const Category = ({ categories, categoryInfo, loading, loadCategories }) => {
    const classes = useStyles();
    useEffect(() => {
        if (categories.length === 0) {
            loadCategories();
        }
    }, []);

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
                        name={categoryInfo.name}
                        img={categoryInfo.img}
                    />
                    <ProductCardList productList={categoryInfo.Products} />
                </>
            )}
            {/* {error && <ErrorNoData errorText="Error al cargar los productos" />} */}
        </Layout>
    );
};

function mapStateToProps(state, ownProps) {
    const categoryId = ownProps.match.params.id;
    return {
        categories: state.categories,
        categoryInfo:
            state.categories.length === 0
                ? []
                : state.categories.find((c) => c.category_id === categoryId),
        loading: state.apiCallsInProgress > 0,
    };
}

const mapDispatchToProps = {
    loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
