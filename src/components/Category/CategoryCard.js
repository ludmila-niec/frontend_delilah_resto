import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import saladCategory from "../../assets/foodIllustration/Salad.svg";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        height: "200px",
        padding: "1rem",
        margin: "1.3rem 0",
        backgroundColor: theme.palette.secondaryLighter.main,
        boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
    },
    icon: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    foodCategory: {
        height: "115px",
        width: "115px",
        margin: "0 0 0.5rem 1rem",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        transform: "translateY(-10px) rotateZ(-6.5deg)",
    },
    cardItems: {
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    root: {
        padding: 0,
    },
}));

const CategoryCard = () => {
    const classes = useStyles();
    return (
        <Card elevation={0} className={classes.cardContainer}>
            <IconButton className={classes.icon}>
                <ArrowBackIos color="primary" />
            </IconButton>
            <div className={classes.cardItems}>
                <CardMedia
                    image={saladCategory}
                    title="ensalada"
                    className={classes.foodCategory}
                />
                <CardContent>
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.root}
                    >
                        Ensaladas
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default CategoryCard;
