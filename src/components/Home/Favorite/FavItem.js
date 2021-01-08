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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 350,
        maxWidth: 250,
        padding: "1rem",
        margin: "1.5rem",
    },
    title: {
        textAlign: "center",
        textTransform: "capitalize",
    },
    iconFav: {
        fontSize: "1.3rem",
    },
    roundButton: {
        border: `1.5px solid ${theme.palette.secondary.main}`,
        marginBottom: "0.5rem",
        padding: "8px",
    },
    pictureBackground: {
        backgroundColor: theme.palette.secondaryLighter.main,
        height: "220px",
        width: "220px",
        borderRadius: theme.shape.borderRadius,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    productImg: {
        height: "90%",
        width: "90%",
    },
}));

const FavItem = ({ product }) => {
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
                    <CardMedia
                        image={img}
                        title={name}
                        className={classes.productImg}
                    />
                </div>
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
                        // component={RouterLink} to={'/product/' + product.id }
                    >
                        VER PRODUCTO
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default FavItem;
