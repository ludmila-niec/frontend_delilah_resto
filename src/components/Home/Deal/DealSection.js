import React, { useState, useEffect, useRef } from "react";
import DealCard from "./DealCard";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dealContainer: {
    padding: "3rem 0",

    "& h2:first-child": {
      paddingLeft: "2rem",
    },
  },
  cardContainer: {
    display: "flex",
    overflowX: "auto",
    padding: "2rem",
  },
}));

const DealSection = ({ products }) => {
  const classes = useStyles();
  const [arrayDeal, setArrayDeal] = useState([]);
  const mealListRef = useRef(null);
  const dessertListRef = useRef(null);
  const beverageListRef = useRef(null);
  const mealList = products.filter(
    (p) => p.category_id !== 5 && p.category_id !== 6
  );
  const dessertList = products.filter((p) => p.category_id === 5);
  const beverageList = products.filter((p) => p.category_id === 6);

  mealListRef.current = mealList;
  dessertListRef.current = dessertList;
  beverageListRef.current = beverageList;
  
  useEffect(() => {
    const meal =
      mealListRef.current[getRandomProduct(mealListRef.current.length)];
    const dessert =
      dessertListRef.current[getRandomProduct(dessertListRef.current.length)];
    const beverage =
      beverageListRef.current[getRandomProduct(beverageListRef.current.length)];
    setArrayDeal([meal, dessert, beverage]);
  }, []);

  return (
    <div className={classes.dealContainer}>
      <Typography variant="h2" color="primary">
        Menu recomendado
      </Typography>
      {arrayDeal.length > 0 && (
        <div className={classes.cardContainer}>
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
