import React from "react";
import { Typography } from "@material-ui/core";
import CategoryItem from "./CategoryItem";
import Categories from "./Categories";

const CategoriesSection = () => {
    return (
        <div style={{ margin: "2rem 0" }}>
            <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                Categorias
            </Typography>
            <Categories />
        </div>
    );
};

export default CategoriesSection;
