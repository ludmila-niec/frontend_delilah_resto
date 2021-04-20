import React from "react";
//react-router
import { withRouter, useHistory } from "react-router-dom";
//material-ui
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  Home,
  Favorite,
  Person,
  MenuBook,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
//assets
import avatarImg from "../../assets/status/userAvatar.png";
// style
import { useStyles } from "./style/menu";

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

const Menu = ({ user, onClose, logoutUser }) => {
  const classes = useStyles();
  const history = useHistory();

  const { firstName, isAdmin } = user;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={avatarImg} alt="user avatar" />
        <Typography variant="h5" color="secondary">
          {firstName}
        </Typography>
      </div>
      <div className={classes.bodyContainer}>
        <List className={classes.listStyle} onClick={onClose}>
          {itemsList.map((item) => {
            const { text, icon, path } = item;
            return (
              <ListItem button key={text} onClick={() => history.push(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
          {isAdmin && (
            <ListItem button key="admin" onClick={() => history.push("/admin")}>
              <ListItemIcon>
                <Settings color="primary" />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>
          )}
          <ListItem button key="logout" onClick={logoutUser}>
            <ListItemIcon>
              <ExitToApp color="primary" />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItem>
        </List>
        <Typography variant="h3" color="secondary" className={classes.brand}>
          Delilah Resto
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(Menu);
