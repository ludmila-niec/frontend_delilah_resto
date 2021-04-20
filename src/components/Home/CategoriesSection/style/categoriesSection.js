import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem 2rem",
  },
  container__categories: {
    width: "100%",
    paddingTop: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      overflowX: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      overflowX: "hidden",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
}));
