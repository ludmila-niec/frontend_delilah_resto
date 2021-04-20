import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  intro: {
    minHeight: "80vh",
    position: "relative",
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
    padding: "8rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "8rem 4rem",
    },
  },
  container__title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",

      "& + p": {
        fontSize: "1.5rem",
      },
    },
  },
  wrapper: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));