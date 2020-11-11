import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import saladImg from "../../assets/ensalada.png";

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
        height: "90%",
        width: "90%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    containerText: {
        marginLeft: "1rem",
    },
}));

const OrderItem = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <div className={classes.backgroundImg}>
                    <img
                        src={saladImg}
                        alt="ensalada"
                        className={classes.img}
                    />
                </div>
                <div className={classes.containerText}>
                    <Typography>Chicken salad x2</Typography>
                    <Typography>$780</Typography>
                </div>
            </div>
            <hr style={{ opacity: 0.5 }} />
        </>
    );
};

export default OrderItem;
