import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "350px",
    [theme.breakpoints.up("md")]: {
      height: "250px",
    },
    "&.MuiPaper-root": {
      backgroundColor: "transparent",
    },
  },
  cancelled: {
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: theme.palette.error.main,
    padding: "0.8rem 1.2rem",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      fontSize: "1.5rem",
      margin: "2rem auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
}));
