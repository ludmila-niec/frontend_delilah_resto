import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
// style
import { useStyles } from "./style/dealCard";

const DealCard = ({ product }) => {
  const classes = useStyles();
  const { product_id, name, img, description } = product;
  return (
    <div className={classes.container}>
      <div className={classes.productInfo}>
        <img src={img} alt={name} />
        <Typography color="primary">{name}</Typography>
        <Typography color="primary">{description}</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to={`/product/${product_id}`}
      >
        ver producto
      </Button>
    </div>
  );
};

export default DealCard;
