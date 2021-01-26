import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    container: {
        height: "480px",
        width: "300px",
        padding: "1.5rem",
        borderRadius: theme.shape.borderRadius,
        boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        marginRight: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",

        "&:nth-child(1)": {
            backgroundColor: "rgba(249, 246, 240, 0.5)",
        },
        "&:nth-child(2)": {
            backgroundColor: "#BDCBF0",
        },
        "&:nth-child(3)": {
            backgroundColor: "rgba(253, 226, 223, 0.5)",
        },

        "& > img": {
            height: "200px",
            width: "200px",
        },
    },
    productInfo: {
        margin: "1rem 0",
        textAlign: "center",

        "& p:first-child": {
            fontWeight: theme.typography.fontWeightBold,
            textTransform: "uppercase",
            marginBottom: "0.6rem",
        },
    },
}));

const DealCard = ({ product }) => {
    const classes = useStyles();
    const { product_id, name, img, description } = product;
    return (
        <div className={classes.container}>
            <img src={img} alt={name} />
            <div className={classes.productInfo}>
                <Typography color="primary">{name}</Typography>
                <Typography color="primary">{description}</Typography>
            </div>
            <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to={`/product/${product_id}`}
            >
                ver producto
            </Button>
        </div>
    );
};

export default DealCard;
