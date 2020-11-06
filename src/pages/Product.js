import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductPicture from "../components/Product/ProductPicture";
import ProductDetail from "../components/Product/ProductDetail";

const Product = () => {
    return (
        <div>
            <Navbar />
            <ProductPicture />
            <ProductDetail />
            <Footer />
        </div>
    );
};

export default Product;
