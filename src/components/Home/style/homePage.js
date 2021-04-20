import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  intro: {
    height: "80vh",
    position: "relative",

    [theme.breakpoints.up("sm")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  intro__bg: {
    position: "absolute",
    zIndex: -10,
    height: "100%",
    width: "100%",

    "& div:first-child": {
      height: "75%",
      backgroundColor: theme.palette.secondaryLighter.main,
      opacity: "50%",
    },
    "& div:last-child": {
      height: "25%",
      backgroundColor: "#F9F6F0",
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
  container: {
    padding: "8rem 2rem 1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  container__wrapper: {
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  container__title: {
    fontSize: "2.5rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      fontSize: "4rem",

      "& + p": {
        fontSize: "1.5rem",
      },
    },
  },
  productImg: {
    height: "250px",
    width: "250px",
    display: "block",
    margin: "1rem auto",
    filter: "drop-shadow(0px 11px 7px rgba(0,0,0,0.3))",

    [theme.breakpoints.up("sm")]: {
      height: "350px",
      width: "350px",
      marginRight: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
      width: "500px",
      marginRight: "0px",
    },
  },
  chip__container: {
    padding: "3rem 2rem",
    width: "100%",
  },
  chip__wrapper: {
    display: "flex",
    overflowX: "auto",

    "& > div": {
      margin: "0.5rem",
      textTransform: "capitalize",
    },

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "& > div": {
        fontSize: "1rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
}));
