import React from "react";
import { IconButton } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import saladImg from "../../assets/ensalada.png";

const useStyles = makeStyles((theme) => ({
    background: {
        minHeight: "50vh",
        backgroundColor: theme.palette.secondaryLighter.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "7rem",
        position: "relative",
    },
    img: {
        height: "80%",
        width: "80%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    iconBtn: {
        position: "absolute",
        right: "20px",
        top: "100px",
    },
    icon: {
        fontSize: "2.5rem",
    },
}));

const ProductPicture = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <img src={saladImg} alt="ensalada" className={classes.img} />
            <IconButton className={classes.iconBtn}>
                <Favorite color="secondary" className={classes.icon} />
            </IconButton>
        </div>
    );
};

export default ProductPicture;
