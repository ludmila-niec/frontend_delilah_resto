import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/Product/ProductItem";
import ProductItemLoading from "../components/Product/ProductItemLoading";
import Error404 from "../components/Error404";
import ErrorNoData from "../components/ErrorNoData";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../actions/productActions";

const Product = ({ match }) => {
    const productId = match.params.id;
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productDetail);
    const { loading, product, error } = productData;

    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch, productId]);
    console.log(product);
    return (
        <div>
            <Navbar />
            {loading && <ProductItemLoading />}
            {product && <ProductItem product={product} loading={loading} />}
            {error && (
                <div style={{ minHeight: "70vh", paddingTop: "10rem" }}>
                    <ErrorNoData errorText="Error al cargar el producto" />
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Product;
