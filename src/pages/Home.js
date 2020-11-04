import React from "react";
import NavBar from "../components/Navbar";
import SearchBox from "../components/shop/SearchBox";
import FavSection from "../components/shop/Favorite/FavSection";
import CategoriesSection from "../components/shop/Category/CategoriesSection";
import Footer from "../components/Footer";
import { Grid } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "7rem" }} />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container direction="column" xs={10}>
                    <SearchBox />
                    <FavSection />
                    <CategoriesSection />
                </Grid>
                <Grid item xs={1} />
                <Footer />
            </Grid>
        </div>
    );
};

export default Home;
