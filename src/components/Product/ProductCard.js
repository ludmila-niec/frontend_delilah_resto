import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    IconButton,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import saladImg from "../../assets/ensalada.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 350,
        padding: "1rem",
        margin: "1.5rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    background: {
        height: "150px",
        width: "150px",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondaryLighter.main,
    },
    productImg: {
        height: "90%",
        width: "90%",
    },
    productData: {
        alignSelf: "flex-start",
    },
    productTitle: {
        fontWeight: 500,
    },
    productDescription: {
        maxWidth: "100px",
        fontSize: "0.7rem",
        overflow: "hidden",
    },
    icon: {
        position: "absolute",
        right: "10px",
        bottom: "10px",
        padding: 0,
    },
}));
const ProductCard = () => {
    const classes = useStyles();
    return (
        <Card
            elevation={0}
            className={classes.container}
            style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
        >
            <CardActionArea className={classes.cardContent}>
                <div className={classes.background}>
                    <CardMedia
                        image={saladImg}
                        title="chicken salad"
                        className={classes.productImg}
                    />
                </div>
                <CardContent className={classes.productData}>
                    <Typography
                        variant="subtitle1"
                        color="primary"
                        className={classes.productTitle}
                    >
                        Chicken Salad
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        gutterBottom
                    >
                        $390
                    </Typography>
                    <Typography
                        variant="body2"
                        className={classes.productDescription}
                    >
                        Ensalada con mix de verder, tomate, huevo, queso
                        gruyere.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <IconButton className={classes.icon}>
                <Favorite color="secondary" />
            </IconButton>
        </Card>
    );
};

export default ProductCard;
