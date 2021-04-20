import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#ffffff",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
      margin: "1rem 0",
      width: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
  formControl: {
    width: "220px",
  },
  orderDetail: {
    backgroundColor: "#ffffff",
    padding: "2rem",

    "& > *": {
      marginBottom: ".6rem",
    },
    borderRadius: theme.shape.borderRadius,
    marginBottom: "1.5rem",
  },
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
  btn: {
    fontSize: "1rem",
    display: "block",
    margin: "3rem auto",
  },
}));