import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      minHeight: "700px",
    },

    "& > .align-content": {
      textAlign: "center",
    },
  },
  container__img: {
    height: "300px",
    width: "auto",
  },
  container__textInfo: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
  container__btn: {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
  },
}));