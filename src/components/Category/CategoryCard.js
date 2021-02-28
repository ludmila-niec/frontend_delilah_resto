import React from "react";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        height: "200px",
        padding: "1rem",
        margin: "1.5rem 0",
        backgroundColor: theme.palette.secondaryLighter.main,
        boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
        [theme.breakpoints.up("sm")]: {
            margin: "4rem",
            height: "250px",
        },
        [theme.breakpoints.up("md")]: {
            height: "280px",
        },
    },
    iconBtn: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    icon: {
        fontSize: "2.5rem",
    },
    foodImg: {
        height: "100px",
        width: "100px",
        margin: "0 1rem 0.5rem",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        transform: "translateY(-10px) rotateZ(-6.5deg)",
        [theme.breakpoints.up("sm")]: {
            height: "130px",
            width: "130px",
            marginRight: "1rem",
        },
        [theme.breakpoints.up("lg")]: {
            height: "150px",
            width: "150px",
        },
    },
    cardItem: {
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "flex-end",
        },
    },
    title: {
        padding: 0,
        textTransform: "capitalize",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "3.5rem",
        },
    },
}));

const CategoryCard = ({ name, img, history }) => {
    const classes = useStyles();

    const goBackRouter = () => {
        history.goBack();
    };
    return (
        <>
            <Card elevation={0} className={classes.cardContainer}>
                <IconButton className={classes.iconBtn} onClick={goBackRouter}>
                    <ArrowBackIos color="primary" className={classes.icon} />
                </IconButton>
                <div className={classes.cardItem}>
                    <img src={img} alt={name} className={classes.foodImg} />
                    <CardContent>
                        <Typography
                            variant="h4"
                            color="primary"
                            className={classes.title}
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <hr style={{ opacity: "0.2" }} />
        </>
    );
};

export default withRouter(CategoryCard);
