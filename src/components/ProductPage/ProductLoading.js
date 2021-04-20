import React from "react";
import { Skeleton } from "@material-ui/lab";
import { useStyles } from "./style/productLoading";

const ProductLoading = () => {
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

export default ProductLoading;
