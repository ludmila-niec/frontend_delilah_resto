import React from "react";
import { withRouter } from "react-router-dom";
import errorImg from "../../../assets/status/error-404.png";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1rem",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  },
  img: {
    height: "200px",
    margin: "2rem",
    [theme.breakpoints.up("md")]: {
      height: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "250px",
    },
  },
}));

const Error404 = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <div className={classes.wrapper}>
        <img src={errorImg} alt="not found img" className={classes.img} />
        <Typography color="secondary" className={classes.title}>
          Oops.. Nada por aquí
        </Typography>
      </div>
    </main>
  );
};

export default withRouter(Error404);
