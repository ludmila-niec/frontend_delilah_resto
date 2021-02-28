import React from "react";
//material-ui
import { Typography, Link } from "@material-ui/core";
import {
    Instagram,
    Twitter,
    Facebook,
    GitHub,
    LinkedIn,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
//react-router
import { Link as RouterLink, useLocation } from "react-router-dom";

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
    linksContainer: {
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "3rem",
        },
    },
    linksContainerSimplified: {
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            width: "100%",
            padding: "3rem",
            justifyContent: "center",
        },
    },
    menuLinks: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            width: "50%",
            "& ul": {
                listStyleType: "none",
                margin: 0,
                padding: 0,
            },
            "& ul:nth-child(2)": {
                paddingLeft: theme.spacing(8),
            },
            "& ul li": {
                marginBottom: theme.spacing(2),
            },
            "& ul li a": {
                color: "#ffffff",
                transition: `0.3s ${theme.transitions.easing.easeIn}`,
                "&:hover": {
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
    socialContainer: {
        [theme.breakpoints.up("sm")]: {
            width: "40%",
            textAlign: "center",
        },
    },
    socialLinks: {
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
    signature: {
        padding: theme.spacing(2),
        textAlign: "center",
        "& > div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "& > a": {
                margin: "1rem",
            },
        },
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
    },
    displayNone: {
        display: "none",
    },
}));

const Footer = () => {
    const classes = useStyles();
    const location = useLocation();
    const navLinksIsNotAvailable =
        location.pathname === "/" ||
        location.pathname === "/register" ||
        location.pathname === "/login";
    return (
        <footer style={{ width: "inherit" }}>
            <div className={classes.footerContainer}>
                <div
                    className={
                        navLinksIsNotAvailable
                            ? classes.linksContainerSimplified
                            : classes.linksContainer
                    }
                >
                    <div
                        className={
                            navLinksIsNotAvailable
                                ? classes.displayNone
                                : classes.menuLinks
                        }
                    >
                        <ul>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/hamburguesas/1"
                                >
                                    Hamburguesas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/pizzas/2"
                                >
                                    Pizzas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/wraps/3"
                                >
                                    Wraps
                                </Link>
                            </li>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/ensaladas/4"
                                >
                                    Ensaladas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/postres/5"
                                >
                                    Postres
                                </Link>
                            </li>
                            <li>
                                <Link
                                    component={RouterLink}
                                    to="/category/bebidas/6"
                                >
                                    Bebidas
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link component={RouterLink} to="/favs">
                                    Mis Favoritos
                                </Link>
                            </li>
                            <li>
                                <Link component={RouterLink} to="/orders">
                                    Mis Pedidos
                                </Link>
                            </li>
                            <li>
                                <Link component={RouterLink} to="/favs">
                                    Mis Cuenta
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.socialContainer}>
                        <Typography variant="h4" color="secondary">
                            Sigamos conectados
                        </Typography>
                        <div className={classes.socialLinks}>
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
                    </div>
                </div>
                <Typography color="secondary">Delilah Resto - 2021</Typography>
            </div>
            <div className={classes.signature}>
                <Typography color="primary">
                    Developed by Ludmila Nieczyporuk
                </Typography>
                <div>
                    <Link
                        href="https://github.com/ludmila-niec"
                        target="_blank"
                        rel="noopener"
                        rel="noreferrer"
                    >
                        <GitHub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ludmila-nieczyporuk/"
                        target="_blank"
                        rel="noopener"
                        rel="noreferrer"
                    >
                        <LinkedIn />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
