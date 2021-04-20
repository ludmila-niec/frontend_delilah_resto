import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    minHeight: "40vh",
    justifyContent: "space-between",
    "& > *": {
      margin: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "30vh",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "50vh",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
  textInfo: {
    textAlign: "center",
  },
  statusImg: {
    height: "100px",
  },
  btnContainer: {
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  btn: {
    fontSize: ".8rem",
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
}));
