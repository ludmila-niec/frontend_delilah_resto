import React, { useState, useEffect } from "react";
import DealCard from "./DealCard";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        overflowX: "auto",
        padding: "2rem",
        width: "300px",
    },
}));

const DealSection = ({ products }) => {
    const classes = useStyles();
    const [arrayDeal, setArrayDeal] = useState([]);
    const mealList = products.filter(
        (p) => p.category_id !== 5 && p.category_id !== 6
    );
    const dessertList = products.filter((p) => p.category_id === 5);
    const beverageList = products.filter((p) => p.category_id === 6);

    useEffect(() => {
        const meal = mealList[getRandomProduct(mealList.length)];
        const dessert = dessertList[getRandomProduct(dessertList.length)];
        const beverage = beverageList[getRandomProduct(beverageList.length)];
        setArrayDeal([meal, dessert, beverage]);
    }, []);
    return (
        <div>
            {/* <Typography variant="h2" color="primary">
                Nuestra recomendación del día
            </Typography> */}
            {arrayDeal.length > 0 && (
                <div className={classes.container}>
                    {arrayDeal.map((product) => (
                        <DealCard key={product.product_id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DealSection;

function getRandomProduct(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}
