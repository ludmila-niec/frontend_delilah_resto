import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography,
} from "@material-ui/core";
import cssClasses from "./categoryItem.module.css";
import burger from "../../../assets/foodIllustration/Burger.svg";

const CategoryItem = () => {
    return (
        <Card
            className={cssClasses.cardContainer}
            elevation={0}
            style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
        >
            <CardMedia
                image={burger}
                className={cssClasses.foodImg}
                title="category-burger"
            />
            <div className={cssClasses.contentAction}>
                <CardContent>
                    <Typography variant="h3" color="primary">
                        Hamburguesas
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        ver mas
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

export default CategoryItem;
