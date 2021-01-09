import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductItem from "../components/Product/ProductItem";
import ProductItemLoading from "../components/Product/ProductItemLoading";
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";

const Product = ({ products, product, loading, loadProducts }) => {
    useEffect(() => {
        if (products.length === 0) {
            loadProducts();
        }
    }, []);
    // if (error) return <ErrorNoData errorText="Error al cargar el producto" />;
    return (
        <div>
            <Navbar />
            {loading && <ProductItemLoading />}
            {product && <ProductItem product={product} />}
            <Footer />
        </div>
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
