import React from "react";
import { Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// style
import {useStyles} from './style/productCardLoading'

const ProductCardLoading = () => {
    const classes = useStyles();
    return (
        <Card
            elevation={0}
            className={classes.container}
            style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
        >
            <div className={classes.content}>
                <Skeleton
                    variant="rect"
                    animation="wave"
                    className={classes.skeletonImg}
                />
            </div>
            <div className={classes.skeletonData}>
                <Skeleton
                    animation="wave"
                    style={{ marginBottom: "1rem", borderRadius: 0 }}
                />
                <Skeleton animation="wave" className={classes.skeletonText} />
                <Skeleton animation="wave" className={classes.skeletonText} />
                <Skeleton animation="wave" className={classes.skeletonText} />
            </div>
        </Card>
    );
};

export default ProductCardLoading;
