import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem 0",

    "& h2:first-child": {
      paddingLeft: "2rem",
    },
  },
  deal__container: {
    padding: "2rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "4rem 2rem 3rem",
    },
  },
  deal__wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "auto",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-around",
      overflowX: "visible",
    },
  },
}));