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
import { Link as RouterLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
// style
import { useStyles } from "./style/navbar";

const Navbar = ({ cart, user, logoutUser }) => {
  const classes = useStyles();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const anchor = "right";
  const history = useHistory();

  function handleMenuDisplay() {
    setIsOpenMenu(!isOpenMenu);
  }

  const handleLogout = () => {
    setTimeout(() => {
      logoutUser();
    }, 1000);
    history.push("/");
  };

  const menuIsNotAvailable = !user;

  return (
    <>
      <AppBar>
        <Toolbar color="primary" className={classes.nav}>
          <Typography variant="h1" color="secondary" className={classes.title}>
            <Link component={RouterLink} to="/home" color="secondary">
              Delilah Resto
            </Link>
          </Typography>
          <div
            className={
              (classes.icons,
              menuIsNotAvailable ? classes.displayNone : undefined)
            }
          >
            <IconButton aria-label="cart" component={RouterLink} to="/checkout">
              <Badge badgeContent={cart.quantity} showZero color="secondary">
                <LocalMall style={{ color: "#ffffff" }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="menu" onClick={handleMenuDisplay}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor={anchor} open={isOpenMenu} onClose={handleMenuDisplay}>
        <Menu
          user={user}
          onClose={handleMenuDisplay}
          logoutUser={handleLogout}
        />
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

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
