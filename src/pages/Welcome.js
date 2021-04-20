import React from "react";
import { Link as RouterLink } from "react-router-dom";
//material-ui
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: "#F9F6F0",
      minHeight: "100vh",
  },
  container: {
      margin: "6rem auto",
  },
  title: {
      fontSize: "2.5rem",
      margin: "2rem",
      [theme.breakpoints.up("sm")]: {
          fontSize: "3.2rem",
      },
      [theme.breakpoints.up("md")]: {
          fontSize: "4.5rem",
      },
  },
  subtitle: {
      [theme.breakpoints.up("sm")]: {
          fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
          fontSize: "1.5rem",
      },
  },
  button: {
      marginBottom: "1.5rem",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
          width: "50%",
      },
      [theme.breakpoints.up("md")]: {
          fontSize: "1.2rem",
      },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} md={2} />
      <Grid item container xs={10} md={8} justify="center">
        <Box
          display="flex"
          flexDirection="column"
          height="50%"
          justifyContent="flex-end"
          alignContent="center"
        >
          <Typography
            color="primary"
            align="center"
            className={classes.subtitle}
          >
            Te damos la bienvenida a
          </Typography>
          <Typography
            variant="h1"
            color="secondary"
            aling="center"
            className={classes.title}
          >
            Delilah Resto
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="90%"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={RouterLink}
            to="/register"
          >
            CREAR CUENTA
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            component={RouterLink}
            to="/login"
          >
            INICIAR SESION
          </Button>
        </Box>
      </Grid>
      <Grid item xs={1} md={2} />
    </Grid>
  );
};

export default Welcome;
