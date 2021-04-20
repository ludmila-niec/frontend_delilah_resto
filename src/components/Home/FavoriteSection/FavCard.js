import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
// style
import { useStyles } from "./style/favCard";

const FavCard = ({ product }) => {
  const classes = useStyles();
  const { product_id, name, img } = product;
  return (
    <div>
      <Card
        className={classes.root}
        elevation={0}
        style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <div className={classes.pictureBackground}>
          <CardMedia image={img} title={name} className={classes.productImg} />
        </div>
        <div>
          <CardContent>
            <Typography variant="body1" className={classes.title}>
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0.2rem auto" }}
              component={RouterLink}
              to={`/product/${product_id}`}
            >
              VER PRODUCTO
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default FavCard;
