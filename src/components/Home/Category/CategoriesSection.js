import React from "react";
import CategoryItem from "./CategoryItem";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "3rem 2rem",
    },
    container__categories: {
        width: "100%",
        paddingTop: theme.spacing(4),

        [theme.breakpoints.up("sm")]: {
            display: "flex",
            overflowX: "auto",
        },
        [theme.breakpoints.up("lg")]: {
            overflowX: "hidden",
            flexWrap: "wrap",
            justifyContent: "space-around",
        },
    },
}));

const CategoriesSection = ({ categories }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h2" color="primary">
                Categorias
            </Typography>
            <div className={classes.container__categories}>
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
