import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem",
    margin: "1.5rem 0",
    boxShadow: '0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      minHeight: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "300px",
    },
    "&:nth-child(odd) a button div:first-of-type": {
      backgroundColor: theme.palette.secondaryLighter.main,
    },
    "&:nth-child(even) a button div:first-of-type": {
      backgroundColor: theme.palette.primaryLighter.main,
    },
    "& .MuiCardContent-root": {
        padding: "0 1rem",
      },
  },
  linkCard: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
   [theme.breakpoints.up('lg')]:{
    width:"100%",
    justifyContent:"space-between",
   },
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  background: {
    height: "125px",
    width: "125px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flex:"1 0 125px",
      height: "125px",
      width: "125px",
    },
    [theme.breakpoints.up("lg")]: {
      flex:"0 0 200px",
      height: "200px",
      width: "200px",
    },
  },
  productImg: {
    height: "85%",
    width: "85%",
    // filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  productData: {
    alignSelf: "flex-start",
    maxWidth: "150px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "300px",
    },
  },
  productTitle: {
    fontWeight: 500,
    textTransform: "capitalize",
    fontSize: "0.9rem",
    // maxWidth: "130px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
      maxWidth: "none",
    },
    "&:first-of-type + h6": {
      [theme.breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
    },
  },
  productDescription: {
    // maxWidth: "100px",
    fontSize: "0.7rem",
    overflowY: "auto",
    maxHeight: "90px",
    color: theme.palette.text.primary,
    [theme.breakpoints.up("lg")]: {
      // maxWidth: "300px",
      fontSize: "0.9rem",
      maxHeight: "none",
    },
  },
  icon: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    padding: 0,
  },
}));

