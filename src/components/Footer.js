import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Instagram, Twitter, Facebook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px 10px 0 0",
        padding: "2rem",
    },
    title: {
        fontSize: "1.5rem",
    },
    socialMedia: {
        width: "70%",
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
    },
    icon: {
        color: "#ffffff",
        transition: `0.3s ${theme.transitions.easing.easeIn}`,
        "&:hover": {
            color: "#F69DA1",
        },
        "&:active": {
            color: "#FDE2DF",
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer style={{ width: "inherit" }}>
            <div className={classes.footerContainer}>
                <Typography variant="h4" color="secondary">
                    Sigamos conectados
                </Typography>
                <div className={classes.socialMedia}>
                    <Link className={classes.icon}>
                        <Twitter />
                    </Link>
                    <Link>
                        <Instagram className={classes.icon} />
                    </Link>
                    <Link>
                        <Facebook className={classes.icon} />
                    </Link>
                </div>
                <Typography color="secondary">Delilah Resto - 2020</Typography>
            </div>
        </footer>
    );
};

export default Footer;
