import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container:{
      margin: "2rem 0"
    },
    form: {
      display: "flex",
    },
    button: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "inline-flex",
        margin: "0 0.5rem",
      },
    },
  }));