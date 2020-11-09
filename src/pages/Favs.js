import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
import FavsEmpty from "../components/Fav/FavsEmpty";
import FavList from "../components/Fav/FavList";

const favs = [1, 2, 3];

const Favs = () => {
    return (
        <Layout>
            <Typography variant="h5">Mis favoritos</Typography>
            {favs.length > 0 ? <FavList /> : <FavsEmpty />}
        </Layout>
    );
};

export default Favs;
