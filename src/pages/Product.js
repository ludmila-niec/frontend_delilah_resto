import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/Product/ProductItem";

const Product = () => {
    return (
        <div>
            <Navbar />
            <ProductItem />
            <Footer />
        </div>
    );
};

export default Product;
