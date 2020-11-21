import React from "react";
import ProductCardLoading from "./ProductCardLoading";
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Link,
    Fade,
    FormControlLabel,
    Checkbox,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";
import useStyles from "./productCardStyle";

const ProductCard = ({ product, loading }) => {
    const classes = useStyles();
    const { product_id, name, img, description, price } = product;
    return (
        <>
            {loading ? (
                <ProductCardLoading />
            ) : (
                <Fade in={!loading}>
                    <Card
                        elevation={0}
                        className={classes.container}
                        style={{
                            boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Link
                            className={classes.linkCard}
                            component={RouterLink}
                            to={`/product/${product_id}`}
                        >
                            <CardActionArea className={classes.cardContent}>
                                <div className={classes.background}>
                                    <CardMedia
                                        image={img}
                                        title={name}
                                        className={classes.productImg}
                                    />
                                </div>
                                <CardContent className={classes.productData}>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary"
                                        className={classes.productTitle}
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="secondary"
                                        gutterBottom
                                    >
                                        ${price}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className={classes.productDescription}
                                    >
                                        {description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.icon}
                                    icon={<FavoriteBorder color="secondary" />}
                                    checkedIcon={<Favorite color="secondary" />}
                                    name="favorite"
                                />
                            }
                        />
                    </Card>
                </Fade>
            )}
        </>
    );
};

export default ProductCard;
