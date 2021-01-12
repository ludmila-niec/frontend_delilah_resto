import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Link,
} from "@material-ui/core";
import { Menu, LocalMall } from "@material-ui/icons";
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

const Navbar = ({ cart }) => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar color="primary" className={classes.nav}>
                <Typography
                    variant="h1"
                    color="secondary"
                    className={classes.title}
                >
                    <Link component={RouterLink} to="/home" color="secondary">
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
                    <IconButton>
                        <Menu className={classes.menuIcon} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
}

export default connect(mapStateToProps, null)(Navbar);
