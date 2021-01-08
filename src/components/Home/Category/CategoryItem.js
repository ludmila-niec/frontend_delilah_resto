import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./categoryItemStyle";

const CategoryItem = ({ category }) => {
    const classes = useStyles();
    const { category_id, name, img } = category;
    return (
        <Card
            className={classes.cardContainer}
            elevation={0}
            style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
        >
            <img src={img} alt={name} className={classes.foodImg} />
            <div className={classes.contentAction}>
                <CardContent>
                    <Typography
                        variant="h3"
                        color="primary"
                        style={{ textTransform: "capitalize" }}
                    >
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to={`/category/${category_id}`}
                    >
                        ver mas
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

export default CategoryItem;
