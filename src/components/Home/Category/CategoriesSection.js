import React from "react";
import CategoryItem from "./CategoryItem";
import { Typography } from "@material-ui/core";
// import Categories from "./Categories";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        width: "100%",
    },
});

const CategoriesSection = ({ categories }) => {
    const classes = useStyles();
    return (
        <div style={{ margin: "2rem 0" }}>
            <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                Categorias
            </Typography>
            <div className={classes.container}>
                {categories.map((category) => (
                    <CategoryItem
                        key={category.category_id}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;
