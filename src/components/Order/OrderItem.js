import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem 0",
        display: "flex",
        alignItems: "center",
    },
    backgroundImg: {
        height: "100px",
        width: "100px",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondaryLighter.main,
    },
    img: {
        height: "75%",
        width: "75%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    containerText: {
        marginLeft: "1rem",
        flex: 1,
    },
}));

const OrderItem = ({ product }) => {
    const classes = useStyles();
    const { name, img } = product;
    const price = product.ProductOrders.product_price;
    const quantity = product.ProductOrders.product_quantity;
    return (
        <>
            <div className={classes.container}>
                <div className={classes.backgroundImg}>
                    <img src={img} alt={name} className={classes.img} />
                </div>
                <div className={classes.containerText}>
                    <Typography>
                        {name} x{quantity}
                    </Typography>
                    <Typography>${price}</Typography>
                </div>
            </div>
            <hr style={{ opacity: 0.5 }} />
        </>
    );
};

export default OrderItem;
