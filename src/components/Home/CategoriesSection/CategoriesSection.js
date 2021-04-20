import React from "react";
import CategoryCard from "./CategoryCard";
import { Typography } from "@material-ui/core";
// style
import { useStyles } from "./style/categoriesSection";

const CategoriesSection = ({ categories }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2" color="primary">
        Categorias
      </Typography>
      <div className={classes.container__categories}>
        {categories.map((category) => (
          <CategoryCard key={category.category_id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
