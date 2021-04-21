import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },
  wrapper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(4),
      backgroundColor: "#ffffff",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
    },
    [theme.breakpoints.up("md")]: {},
  },
}));

const RegisterLoginLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={1} sm={2} md={3} lg={2} />
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={10}
            sm={8}
            md={6}
            lg={8}
            className={classes.wrapper}
          >
            {children}
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} />
        </Grid>
      </div>
    </main>
  );
};

export default RegisterLoginLayout;
