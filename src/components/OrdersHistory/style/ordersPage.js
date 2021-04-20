import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8rem 2rem",
    minHeight: "80vh",

    "& > .container-empty": {
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    },
  },
  container__orders: {
    margin: "3rem auto",
    [theme.breakpoints.up("sm")]: {
      height: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "80vw",
      padding: "3rem",
    },
  },
  container__list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "1.5rem",
    },
  },
  container__pagination: {
    "& > ul": {
      margin: "3rem auto",
      justifyContent: "center",
    },
  },
}));
