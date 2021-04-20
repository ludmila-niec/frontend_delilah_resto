import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
  displayNone: {
    display: "none",
  },
}));