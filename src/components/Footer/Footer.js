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
//react-router
import { Link as RouterLink, useLocation } from "react-router-dom";
// style
import { useStyles } from "./style/footer";

const CATEGORIES_LINKS = [
  { name: "Hamburguesas", link: "/category/hamburguesas/1" },
  { name: "Pizzas", link: "/category/pizzas/2" },
  { name: "Wraps", link: "/category/wraps/3" },
  { name: "Ensaladas", link: "/category/ensaladas/4" },
  { name: "Postres", link: "/category/postres/5" },
  { name: "Bebidas", link: "/category/bebidas/6" },
];

const SECTIONS_LINKS = [
  { name: "Mis Favoritos", link: "/favs" },
  { name: "Mis Pedidos", link: "/orders" },
  // {name:"Mi Cuenta", link:"/user"},
];

const SOCIAL_LINKS = [
  { name: "github", icon: <GitHub />, link: "https://github.com/ludmila-niec" },
  {
    name: "linkedin",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/ludmila-nieczyporuk/",
  },
];

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
              navLinksIsNotAvailable ? classes.displayNone : classes.menuLinks
            }
          >
            <ul>
              {CATEGORIES_LINKS.map((category) => {
                const { name, link } = category;
                return (
                  <li key={name}>
                    <Link component={RouterLink} to={link}>
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* <li>
                <Link component={RouterLink} to="/category/hamburguesas/1">
                  Hamburguesas
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/category/pizzas/2">
                  Pizzas
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/category/wraps/3">
                  Wraps
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/category/ensaladas/4">
                  Ensaladas
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/category/postres/5">
                  Postres
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/category/bebidas/6">
                  Bebidas
                </Link>
              </li> */}
            </ul>
            <ul>
              {SECTIONS_LINKS.map((section) => {
                const { name, link } = section;
                return (
                  <li key={name}>
                    <Link component={RouterLink} to={link}>
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* <li>
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
              </li> */}
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
          {SOCIAL_LINKS.map((social) => {
            const { name, icon, link } = social;
            return (
              <Link key={name} href={link} rel="noopener noreferrer">
                {icon}
              </Link>
            );
          })}
          {/* <Link
            href="https://github.com/ludmila-niec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ludmila-nieczyporuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
