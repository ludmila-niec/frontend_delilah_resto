import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#000000de",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    position: "relative",
    backgroundColor: "#ffffff",
    padding: "2rem",
    width: "90%",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
    },
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
