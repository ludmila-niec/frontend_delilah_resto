import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8rem 2rem",
    [theme.breakpoints.up("md")]: {
      padding: "8rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10rem",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    paddingTop: "2rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
      padding: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
    },
  },
  noResults__container: {
    padding: "2rem",
    height: "50vh",
    [theme.breakpoints.up("sm")]: {
      padding: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "60vh",
    },
  },
  noResults__title: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
  noResults__imgContainer: {
    height: "200px",
    width: "200px",
    "& > img": {
      height: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "60%",
      width: "60%",
    },
  },
}));
