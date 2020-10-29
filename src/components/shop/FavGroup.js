import React from "react";
import FavItem from "./FavItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex",
        width: "90vw",
        overflowX: "scroll",
    },
});

const FavGroup = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <FavItem />
            <FavItem />
            <FavItem />
        </div>
    );
};

export default FavGroup;
