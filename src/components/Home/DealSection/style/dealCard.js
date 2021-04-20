import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "450px",
    minWidth: "280px",
    padding: "2rem",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
    margin: "1rem",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    "&:nth-child(1)": {
      backgroundColor: "rgba(249, 246, 240, 0.5)",
    },
    "&:nth-child(2)": {
      backgroundColor: "#BDCBF0",
    },
    "&:nth-child(3)": {
      backgroundColor: "rgba(253, 226, 223, 0.5)",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
      maxWidth: "350px",
    },
  },
  productInfo: {
    margin: "1rem 0",
    textAlign: "center",

    "& > img": {
      height: "150px",
      width: "150px",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      marginBottom: "1rem",
    },

    "& p:first-of-type": {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: "uppercase",
      marginBottom: "0.6rem",
    },
    "& p:last-of-type": {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      "& > img": {
        height: "200px",
        width: "200px",
      },
    },
  },
}));
