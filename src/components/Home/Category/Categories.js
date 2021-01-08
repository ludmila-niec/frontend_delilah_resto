import React, { useEffect } from "react";
import ErrorNoData from "../../ErrorNoData";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../actions/categoryActions";
import CategoryItem from "./CategoryItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        width: "100%",
    },
});
const Categories = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoryList);
    const { loading, categoryList, error } = categories;

    useEffect(() => {
        console.log("effect categories");
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <>
            {loading && <p>Cargando las categorias...</p>}
            {categoryList && (
                <div className={classes.container}>
                    {categoryList.data.map((category) => (
                        <CategoryItem
                            key={category.category_id}
                            category={category}
                            loading={loading}
                        />
                    ))}
                </div>
            )}
            {error && (
                <ErrorNoData errorText="Error al cargar las categorias" />
            )}
        </>
    );
};

export default Categories;
