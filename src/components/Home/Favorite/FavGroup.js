import React from "react";
import FavItem from "./FavItem";
import Carousel from "./Carousel";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch, useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: "#f3f3f3",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         width: "300px",
//     },
// }));

const FavGroup = ({ favorites }) => {
    return (
        <Carousel>
            {favorites.map((product) => (
                <FavItem key={product.product_id} product={product} />
            ))}
        </Carousel>
    );
};

export default FavGroup;
