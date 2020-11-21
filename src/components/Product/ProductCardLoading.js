import React from "react";
import { Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem",
        margin: "1.5rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
        height: "220px",
        display: "flex",
        alignItems: "center",
    },
    content: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    skeletonImg: {
        width: "150px",
        height: "150px",
    },
    skeletonData: {
        alignSelf: "flex-start",
        width: "50%",
        padding: "1rem",
    },
    skeletonText: {
        width: "80%",
        borderRadius: 0,
    },
}));

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
