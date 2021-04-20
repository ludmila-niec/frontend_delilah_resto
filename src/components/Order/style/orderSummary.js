import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    boxShadow: theme.myShadow.cardShadow,
    borderRadius: theme.shape.borderRadius,
  },
  totalAmount: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
    margin: "1rem 0",
  },
  orderInfo: {
    margin: "1rem 0",

    "& > div": {
      margin: ".8rem 0",
    },
  },
  btn: {
    width: "80%",
    display: "flex",
    fontSize: "1rem",
    margin: "4rem auto",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
}));