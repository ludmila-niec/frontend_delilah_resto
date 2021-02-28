import React, { useEffect } from "react";
import ProductItem from "../components/Product/ProductItem";
import ProductItemLoading from "../components/Product/ProductItemLoading";
// redux
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
// material-ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up("md")]: {
            padding: "8rem 0",
            margin: "8rem auto",
            width: "80vw",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "8rem 4em",
        },
    },
    productCard: {
        [theme.breakpoints.up("md")]: {
            borderRadius: theme.shape.borderRadius,
            boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        },
    },
}));

const Product = ({ products, product, loading, loadProducts }) => {
    const classes = useStyles();
    useEffect(() => {
        if (products.length === 0) {
            loadProducts();
        }
    }, []);
    // if (error) return <ErrorNoData errorText="Error al cargar el producto" />;
    return (
        <main>
            <div className={classes.container}>
                {loading && <ProductItemLoading />}
                <div className={classes.productCard}>
                    {product && <ProductItem product={product} />}
                </div>
            </div>
        </main>
    );
};

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.id;
    return {
        products: state.products,
        product:
            state.products.length === 0
                ? []
                : state.products.find((p) => p.product_id == productId),
        loading: state.apiCallsInProgress > 0,
    };
}

const mapDispatchToProps = {
    loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
