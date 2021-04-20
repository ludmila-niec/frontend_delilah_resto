import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    height: "150px",
    padding: "1rem",
    margin: "1.5rem 0",
    backgroundColor: theme.palette.secondaryLighter.main,
    boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "250px",
    },
  },
  iconBtn: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  icon: {
    fontSize: "2rem",
    [theme.breakpoints.up('sm')]:{
        fontSize: "2.5rem",
    }
  },
  cardItem: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",

    "& > .MuiCardContent-root": {
      padding: "0.5rem",
    },
    "& > .MuiCardContent-root:last-child": {
      paddingBottom: 0,
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
    },
  },
  title: {
    padding: 0,
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    },
  },
}));