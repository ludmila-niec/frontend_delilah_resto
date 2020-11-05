import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/shop/SearchBox";
import FavSection from "../components/shop/Favorite/FavSection";
import CategoriesSection from "../components/shop/Category/CategoriesSection";

const Home = () => {
    return (
        <Layout>
            <SearchBox />
            <FavSection />
            <CategoriesSection />
        </Layout>
    );
};

export default Home;
