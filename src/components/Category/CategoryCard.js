import React from "react";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        height: "200px",
        padding: "1rem",
        margin: "1.3rem 0",
        backgroundColor: theme.palette.secondaryLighter.main,
        boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
    },
    icon: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    foodImg: {
        height: "115px",
        width: "115px",
        margin: "0 0 0.5rem 1rem",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        transform: "translateY(-10px) rotateZ(-6.5deg)",
    },
    cardItem: {
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    title: {
        padding: 0,
        textTransform: "capitalize",
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
                <IconButton className={classes.icon} onClick={goBackRouter}>
                    <ArrowBackIos color="primary" />
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
