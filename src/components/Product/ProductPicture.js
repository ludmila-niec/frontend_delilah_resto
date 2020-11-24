import React from "react";
import { withRouter } from "react-router-dom";
import { IconButton, FormControlLabel, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder, ArrowBackIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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
        height: "65%",
        width: "65%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        margin: "2rem",
    },
    favBtn: {
        position: "absolute",
        right: "20px",
        top: "100px",
    },
    backBtn: {
        position: "absolute",
        left: "20px",
        top: "100px",
    },
    icon: {
        fontSize: "2.5rem",
    },
    skeleton: {
        height: "50vh",
        width: "100%",
    },
}));

const ProductPicture = ({ history, product, loading }) => {
    const classes = useStyles();
    const { name, img } = product.data;

    const goBackRouter = () => {
        history.goBack();
    };
    return (
        <div className={classes.background}>
            <IconButton className={classes.backBtn} onClick={goBackRouter}>
                <ArrowBackIos color="primary" className={classes.icon} />
            </IconButton>
            <FormControlLabel
                control={
                    <Checkbox
                        className={classes.favBtn}
                        icon={
                            <FavoriteBorder
                                color="secondary"
                                className={classes.icon}
                            />
                        }
                        checkedIcon={
                            <Favorite
                                color="secondary"
                                className={classes.icon}
                            />
                        }
                        name="favorite"
                    />
                }
            />
            <img src={img} alt={name} className={classes.img} />
        </div>
    );
};

export default withRouter(ProductPicture);
