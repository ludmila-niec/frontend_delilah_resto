import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem 0",
    display: "flex",
    alignItems: "center",
  },
  backgroundImg: {
    height: "100px",
    width: "100px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondaryLighter.main,
  },
  img: {
    height: "75%",
    width: "75%",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  containerText: {
    marginLeft: "1rem",
    flex: 1,
  },
}));