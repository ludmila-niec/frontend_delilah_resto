import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/shop/SearchBox";
import CategoryCard from "../components/Category/CategoryCard";
import ProductList from "../components/Category/ProductList";

const Category = () => {
    return (
        <Layout>
            <SearchBox />
            <CategoryCard />
            <ProductList />
        </Layout>
    );
};

export default Category;
