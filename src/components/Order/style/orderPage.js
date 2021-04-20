import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "8rem 4rem",
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
  },
  wrapper: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      margin: "0 auto",

      "& > div:last-of-type": {
        width: "70%",
        margin: "0 auto",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& > div:last-of-type": {
        width: "60%",
      },
    },
  },
}));