import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.myShadow.cardShadow,
    display: "flex",
    alignItems: "center",
    height: "120px",
    marginBottom: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    width: "90px",
    height: "100%",
    borderRadius: "inherit",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  infoContainer: {
    marginLeft: "1rem",
  },
}));
