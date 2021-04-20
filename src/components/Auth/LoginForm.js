import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TextField, Box, Typography, Button, Link } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-root": {
      zIndex: 0,
    },
    margin: "0.8rem auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      flexDirection:"row",
      width:"100%"
    },
  },
  wrapper: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  input: {
    margin: "0.8rem auto",
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  buttonWrapper: {
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
      width: "40%",
    },
  },
  button: {
    marginBottom: "1.5rem",
    width: "100%",
    fontSize: "1rem",
  },
  logoContainer:{
      display:"none",
      [theme.breakpoints.up('lg')]:{
      width:"50%",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#F9F6F0",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",

      "& > h3":{
          fontSize:"2.5rem"
      }
    }

  }
}));

const LoginForm = ({ values, errors, handleChange, handleSubmit, user }) => {
  const classes = useStyles();
  const disableButton = !(values.email && values.password);

  return (
    <div className={classes.container}>
      <div>
        <Typography variant="h2" color="primary" className={classes.title}>
          Iniciar Sesión
        </Typography>
        {user.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {user.error}
          </Alert>
        )}
        <form
          style={{ margin: "2rem auto" }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            id="outlined-lastName"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.root}
            label="Correo Electronico"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            required
            type="email"
          />
          <TextField
            id="outlined-phone"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.root}
            label="Contraseña"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.password}
            required
            type="password"
          />

          <Box
            display="flex"
            flexDirection="column"
            width="60%"
            mx="auto"
            mt={7}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              disabled={disableButton}
            >
              iniciar sesión
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              <Link component={RouterLink} to="/">
                cancelar
              </Link>
            </Button>
          </Box>
        </form>

        <div style={{ textAlign: "center" }}>
          <Typography>No tenes cuenta?</Typography>
          <Typography>
            <Link component={RouterLink} to="/register">
              Hace click acá
            </Link>
          </Typography>
        </div>
      </div>
      <div className={classes.logoContainer} >
          <Typography variant='h3' color='secondary'>Delilah Resto</Typography>
          <Typography color='primary'>Bienvenide</Typography>
      </div>
    </div>
  );
};

export default LoginForm;
