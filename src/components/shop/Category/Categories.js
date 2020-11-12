import React from "react";
import CategoryItem from "./CategoryItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        width: "100%",
    },
});
const Categories = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </div>
    );
};

export default Categories;
