import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    "& > p": {
      marginBottom: "1rem",
    },
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& > a": {
        margin: "0 1rem",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& > p": {
        marginBottom: 0,
      },
    },
  },
  displayNone: {
    display: "none",
  },
}));
