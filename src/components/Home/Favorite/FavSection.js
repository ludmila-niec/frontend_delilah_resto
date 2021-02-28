import React from "react";
import FavGroup from "./FavGroup";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "3rem 0",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    },
    container__title: {
        backgroundColor: "rgba(249, 246, 240, 0.5)",
        fontWeight: theme.typography.fontWeightBold,
        padding: "2rem",
        textAlign: "center",

        "& > a": {
            display: "flex",
            alignItems: "center",
            "&:hover": {
                textDecorationColor: theme.palette.secondary.main,
            },
            "& > h2": {
                marginRight: theme.spacing(1),
            },
        },

        [theme.breakpoints.up("sm")]: {
            fontSize: "1.5rem",
            flex: 1,
            position: "relative",
            "& > a": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "block",

                "& > h2": {
                    marginBottom: theme.spacing(2),
                },
            },
        },
    },
    favIcon: {
        [theme.breakpoints.up("md")]: {
            fontSize: "2rem",
        },
    },
    container__carousel: {
        backgroundColor: "rgba(253, 226, 223, 0.5)",
        padding: "2rem",
        [theme.breakpoints.up("sm")]: {
            flex: 2,
            padding: "3rem",
        },
    },
}));

const FavSection = ({ favorites }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.container__title}>
                <Link component={RouterLink} to="/favs">
                    <Typography
                        variant="h2"
                        color="secondary"
                        className={classes.title}
                    >
                        Mis Favoritos
                    </Typography>
                    <Favorite color="secondary" className={classes.favIcon} />
                </Link>
            </div>
            <div className={classes.container__carousel}>
                <FavGroup favorites={favorites} />
            </div>
        </div>
    );
};

export default FavSection;
