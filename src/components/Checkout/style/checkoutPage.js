import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  intro__bg: {
    position: "absolute",
    zIndex: -10,
    height: "100%",
    width: "100%",

    "& div:first-child": {
      height: "75%",
      backgroundColor: "#F9F6F0",
      opacity: "50%",
    },
    "& div:last-child": {
      height: "25%",
      backgroundColor: theme.palette.secondaryLighter.main,
      opacity: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",

      "& div:first-child": {
        height: "100%",
        width: "75%",
      },

      "& div:last-child": {
        height: "100%",
        width: "25%",
      },
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    paddingTop: "8rem",
    paddingLeft: "2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
  },
  container: {
    padding: "3rem 2rem 8rem",
    [theme.breakpoints.up("sm")]: {
      padding: "4rem 8rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 8rem",
    },
  },
  btnClearBag: {
    margin: "5rem auto",
    display: "block",
  },
}));