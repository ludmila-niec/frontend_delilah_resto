import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      padding: "8rem 0",
      margin: "8rem auto",
      width: "80vw",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "8rem 4em",
    },
  },
  productCard: {
    [theme.breakpoints.up("md")]: {
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
    },
  },
}));