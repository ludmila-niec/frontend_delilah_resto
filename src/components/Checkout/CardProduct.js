import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@material-ui/core";
import { Remove, Add, Delete } from "@material-ui/icons";
import {useStyles} from './style/cardProduct'

const CardProduct = ({
  productData,
  quantity,
  increaseItem,
  decreaseItem,
  removeItem,
}) => {
  const classes = useStyles();
  const { product_id, name, img, price } = productData;
  const [isEditting, setIsEditting] = useState(false);

  const handleEdit = () => {
    setIsEditting(!isEditting);
  };

  const handleRemoveItem = () => {
    removeItem(product_id);
  };

  const handleIncrease = () => {
    increaseItem(product_id);
  };
  const handleDecrease = () => {
    if (quantity === 1) {
      return removeItem(product_id);
    } else {
      return decreaseItem(product_id);
    }
  };
  return (
    <Card
      className={classes.container}
      elevation={0}
      style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <div className={classes.productData}>
        <div className={classes.background}>
          <CardMedia image={img} title={name} className={classes.productImg} />
        </div>
        <CardContent
          className={classes.cardContent}
          style={{ paddingBottom: "0 0 0 1rem" }}
        >
          <Typography>{name}</Typography>
          <div className={classes.contentFlex}>
            <Typography className={classes.price}>
              ${price} x {quantity}u.
            </Typography>
            <Button onClick={handleEdit}>Editar</Button>
          </div>
        </CardContent>
      </div>
      {isEditting && (
        <>
          <Divider style={{ marginBottom: "0.6rem" }} />
          <div className={classes.contentFlex}>
            <div
              className={classes.btnActions}
              aria-label="button select quantity"
            >
              <IconButton
                aria-label="decrease quantity"
                onClick={handleDecrease}
              >
                <Remove className={classes.icon} />
              </IconButton>

              <Typography>{quantity}</Typography>
              <IconButton
                aria-label="increase quantity"
                onClick={handleIncrease}
              >
                <Add className={classes.icon} />
              </IconButton>
            </div>
            <IconButton
              onClick={handleRemoveItem}
              className={classes.btnDelete}
              aria-label="remove product"
            >
              <Delete color="error" className={classes.iconDelete} />
            </IconButton>
          </div>
        </>
      )}
    </Card>
  );
};

export default CardProduct;
