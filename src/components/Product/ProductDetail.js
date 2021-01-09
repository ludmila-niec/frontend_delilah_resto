import React, { useState } from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "300px",
        borderRadius: "10px 10px 0 0 ",
        transform: "translateY(-15px)",
        backgroundColor: "#ffffff",
        padding: "2rem",
    },
    title: {
        fontSize: "2rem",
        fontWeight: 600,
        textTransform: "capilize",
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: 600,
        margin: "0.5rem 0",
    },
    description: {
        fontSize: "1.2rem",
        margin: "1rem 0",
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "3rem",
    },
    btnAdd: {
        fontSize: "1rem",
    },
    icon: {
        fontSize: "1.2rem",
    },
}));

const ProductDetail = ({ onOpenModal, product }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { product_id, name, description, price } = product;
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // const handleAddToCart = () => {
    //     dispatch(addToCart(product.data, quantity));
    //     onOpenModal();
    // };
    return (
        <div className={classes.container}>
            <div>
                <Typography color="primary" className={classes.title}>
                    {name}
                </Typography>
                <Typography color="secondary" className={classes.price}>
                    ${price}
                </Typography>
                <Typography className={classes.description}>
                    {description}
                </Typography>
                <div className={classes.btnContainer}>
                    <ButtonGroup
                        color="primary"
                        aria-label="button select quantity"
                    >
                        <Button
                            onClick={handleDecreaseQuantity}
                            disabled={quantity <= 1 ? true : false}
                        >
                            <Remove className={classes.icon} />
                        </Button>
                        <Button>{quantity}</Button>
                        <Button onClick={handleIncreaseQuantity}>
                            <Add className={classes.icon} />
                        </Button>
                    </ButtonGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btnAdd}
                        // onClick={handleAddToCart}
                    >
                        agregar ${price * quantity}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
