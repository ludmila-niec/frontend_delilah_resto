import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  containerLoading: {
    padding: "2rem 0",
  },
  titleLoading: {
    marginBottom: "2rem",
  },
  container: {
    padding: "8rem 2rem",
    [theme.breakpoints.up("md")]: {
      padding: "8rem 6rem",
    },
  },
}));
