import React from "react";
import NavBar from "../components/Navbar";
import SearchBox from "../components/shop/SearchBox";
import FavSection from "../components/shop/FavSection";
import { Grid } from "@material-ui/core";

const Store = () => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "7rem" }} />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container direction="column" xs={10}>
                    <SearchBox />
                    <FavSection />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div>
    );
};

export default Store;
