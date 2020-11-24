import React from "react";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    skeletonImg: {
        height: "60vh",
        width: "100%",
    },
    containerData: {
        minHeight: "300px",
        borderRadius: "10px 10px 0 0 ",
        transform: "translateY(-15px)",
        backgroundColor: "#ffffff",
        padding: "2rem",
    },
    skeletonTitle: {
        borderRadius: 0,
        fontSize: "2.2rem",
        marginBottom: "2rem",
    },
    skeletonText: {
        width: "80%",
        borderRadius: 0,
    },
}));
const ProductItemLoading = () => {
    const classes = useStyles();
    return (
        <>
            <Skeleton
                animation="wave"
                variant="rect"
                className={classes.skeletonImg}
            />
            <div className={classes.containerData}>
                <Skeleton animation="wave" className={classes.skeletonTitle} />

                <Skeleton animation="wave" className={classes.skeletonText} />
                <Skeleton animation="wave" className={classes.skeletonText} />
                <Skeleton animation="wave" className={classes.skeletonText} />
            </div>
        </>
    );
};

export default ProductItemLoading;
