import React from "react";
//react-router
import { withRouter } from "react-router-dom";
//material-ui
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { Home, Favorite, Person, MenuBook, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
//assets
import avatarImg from "../../assets/status/userAvatar.png";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "300px",
    },
    header: {
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#f1f1f1",

        "& > h5": {
            margin: "1.5rem 0",
            textTransform: "capitalize",
        },
    },

    bodyContainer: {
        padding: "1rem",
    },
    listStyle: {
        marginTop: "2rem",
    },
    brand: {
        margin: "2rem auto",
        position: "absolute",
        bottom: 0,
        right: "50%",
        transform: "translateX(50%)",
    },
}));

const Menu = ({ history, user }) => {
    const classes = useStyles();
    const itemsList = [
        { text: "Inicio", icon: <Home color="primary" />, path: "/home" },
        {
            text: "Mis Favoritos",
            icon: <Favorite color="primary" />,
            path: "/favs",
        },
        {
            text: "Mis Pedidos",
            icon: <MenuBook color="primary" />,
            path: "/orders",
        },
        {
            text: "Mi Cuenta",
            icon: <Person color="primary" />,
            path: "/profile",
        },
    ];

    const { firstName, isAdmin } = user;
    console.log(user);
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={avatarImg} alt="user avatar image" />
                <Typography variant="h5" color="secondary">
                    {firstName}
                </Typography>
            </div>
            <div className={classes.bodyContainer}>
                <List className={classes.listStyle}>
                    {itemsList.map((item) => {
                        const { text, icon, path } = item;
                        return (
                            <ListItem
                                button
                                key={text}
                                onClick={() => history.push(path)}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                    {isAdmin && (
                        <ListItem button key={"admin"}>
                            <ListItemIcon>
                                <Settings color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                    )}
                </List>
                <Typography
                    variant="h3"
                    color="secondary"
                    className={classes.brand}
                >
                    Delilah Resto
                </Typography>
            </div>
        </div>
    );
};

export default withRouter(Menu);
