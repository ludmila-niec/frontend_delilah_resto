import React, { useState } from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useStyles } from "./style/productDetail";

const ProductDetail = ({ onOpenModal, product, addToCart }) => {
  const classes = useStyles();
  const { product_id, name, description, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product_id, price, quantity);
    onOpenModal();
  };
  return (
    <div className={classes.wrapper}>
      <Typography color="primary" className={classes.title}>
        {name}
      </Typography>
      <Typography color="secondary" className={classes.price}>
        ${price}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
      <div className={classes.btnContainer}>
        <ButtonGroup color="primary" aria-label="button select quantity">
          <Button onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
            <Remove className={classes.icon} />
          </Button>
          <Button>{quantity}</Button>
          <Button onClick={handleIncreaseQuantity}>
            <Add className={classes.icon} />
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          className={classes.btnAdd}
          onClick={handleAddToCart}
        >
          agregar ${price * quantity}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
