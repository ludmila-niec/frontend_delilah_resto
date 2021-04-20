import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1rem",
  },
  textInfo: {
    fontSize: "1.5rem",
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
  },
  btn: {
    fontSize: "1rem",
  },
}));