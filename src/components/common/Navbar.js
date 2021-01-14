import React, { useState } from "react";
import Menu from "./Menu";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Link,
    Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon, LocalMall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.5rem",
    },
    offset: theme.mixins.toolbar,
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.6rem 1rem",
    },
    menuIcon: {
        color: "#ffffff",
        fontSize: "30px",
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            height: "1.5rem",
            width: "1.5rem",
        },
    },
    icons: {
        display: "flex",
        alignItems: "center",
    },
}));

const Navbar = ({ cart, user }) => {
    const classes = useStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const anchor = "right";

    function handleMenuDisplay() {
        setIsOpenMenu(!isOpenMenu);
    }
    return (
        <>
            <AppBar>
                <Toolbar color="primary" className={classes.nav}>
                    <Typography
                        variant="h1"
                        color="secondary"
                        className={classes.title}
                    >
                        <Link
                            component={RouterLink}
                            to="/home"
                            color="secondary"
                        >
                            Delilah Resto
                        </Link>
                    </Typography>
                    <div className={classes.icons}>
                        <IconButton
                            aria-label="cart"
                            component={RouterLink}
                            to="/checkout"
                        >
                            <Badge
                                badgeContent={cart.quantity}
                                showZero
                                color="secondary"
                            >
                                <LocalMall style={{ color: "#ffffff" }} />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="menu"
                            onClick={handleMenuDisplay}
                        >
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={anchor}
                open={isOpenMenu}
                onClose={handleMenuDisplay}
            >
                <Menu user={user} />
            </Drawer>
        </>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart,
        user: state.userLogin.user,
    };
}

export default connect(mapStateToProps, null)(Navbar);
