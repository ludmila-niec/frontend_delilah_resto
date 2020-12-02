import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    ButtonGroup,
    Button,
    IconButton,
} from "@material-ui/core";
import { Remove, Add, Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
    increaseItem,
    decreaseItem,
    removeItem,
} from "../../actions/cartActions";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 350,
        padding: "1rem",
        margin: "1rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    background: {
        height: "150px",
        width: "150px",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondaryLighter.main,
    },
    productImg: {
        height: "95%",
        width: "95%",
    },
    cardContent: {
        height: "150px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    price: {
        margin: ".5rem 0",
    },
    btn: {
        padding: "5px",
    },
    icon: {
        fontSize: "0.8rem",
    },
    iconDelete: {
        fontSize: "1.5rem",
    },
    btnDelete: {
        padding: 0,
    },
    btnActions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

const CardItem = ({ productData }) => {
    const classes = useStyles();
    const { product_id, name, img, price } = productData.product;
    const { quantity } = productData;
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        console.log("remove");
        console.log(product_id);
        dispatch(removeItem(product_id));
    };

    const handleIncrease = () => {
        console.log("increase");
        console.log(product_id);
        dispatch(increaseItem(product_id));
    };
    const handleDecrease = () => {
        console.log("decrease");
        console.log(product_id);
        if (quantity === 1) {
            return dispatch(removeItem(product_id));
        } else {
            return dispatch(decreaseItem(product_id));
        }
    };
    return (
        <div>
            <Card
                className={classes.container}
                elevation={0}
                style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
            >
                <div className={classes.background}>
                    <CardMedia
                        image={img}
                        title={name}
                        className={classes.productImg}
                    />
                </div>
                <CardContent
                    className={classes.cardContent}
                    style={{ paddingBottom: 0 }}
                >
                    <div>
                        <Typography>{name}</Typography>
                        <Typography className={classes.price}>
                            ${price * quantity}
                        </Typography>
                    </div>
                    <div className={classes.btnActions}>
                        <ButtonGroup
                            color="primary"
                            aria-label="button select quantity"
                        >
                            <Button
                                className={classes.btn}
                                onClick={handleDecrease}
                            >
                                <Remove className={classes.icon} />
                            </Button>
                            <Button className={classes.btn}>{quantity}</Button>
                            <Button
                                className={classes.btn}
                                onClick={handleIncrease}
                            >
                                <Add className={classes.icon} />
                            </Button>
                        </ButtonGroup>
                        <IconButton
                            onClick={handleRemoveItem}
                            className={classes.btnDelete}
                        >
                            <Delete
                                color="error"
                                className={classes.iconDelete}
                            />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardItem;
