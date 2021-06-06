import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
      minHeight: "90vh",
      padding: "8rem 2rem",
      [theme.breakpoints.up("sm")]: {
        padding: "8rem 4rem",
      },
    },
    container__title: {
      fontSize: "2rem",
      fontWeight: theme.typography.fontWeightBold,
      textTransform: "capitalize",
      color: "#214C8A",
      marginBottom: theme.spacing(1),
  
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
    },
    container__nav: {
      padding: "1rem",
      "& > ol": {
        justifyContent: "flex-end",
      },
    },
  }));