import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "3rem 0",
    [theme.breakpoints.up("md")]: {
      margin: "5rem 0",
    },
  },
}));
