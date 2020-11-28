import React, { useEffect } from "react";
import FavItem from "./FavItem";
import Carousel from "./Carousel";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../../actions/favoriteActions";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "300px",
    },
}));

const FavGroup = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const favoriteData = useSelector((state) => state.favoriteList);
    const { favorites } = favoriteData;

    return (
        <Carousel>
            {favorites.map((product) => (
                <FavItem key={product.product_id} product={product} />
            ))}
        </Carousel>
    );
};

export default FavGroup;
