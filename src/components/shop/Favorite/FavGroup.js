import React from "react";
import FavItem from "./FavItem";
import Carousel from "./Carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "300px",
    },
}));

const FavGroup = ({ ref }) => {
    const classes = useStyles();
    return (
        <Carousel>
            <FavItem />
            <FavItem />
            <FavItem />
        </Carousel>
    );
};

export default FavGroup;
