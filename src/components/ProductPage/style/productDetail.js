import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "300px",
    borderRadius: "10px 10px 0 0 ",
    transform: "translateY(-15px)",
    backgroundColor: "#ffffff",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      transform: "translateY(0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      flex: 1,
      borderRadius: "0 10px 10px 0",
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    textTransform: "capilize",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: "0.5rem 0",
  },
  description: {
    fontSize: "1.2rem",
    margin: "1rem 0",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3rem",
  },
  btnAdd: {
    fontSize: "1rem",
  },
  icon: {
    fontSize: "1.2rem",
  },
}));
