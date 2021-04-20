import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TextField, Box, Typography, Button, Link } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../../Hooks/useForm";
import { validateRegisterStep2 } from "../../../tools/validation/validate";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-root": {
      zIndex: 0,
    },
    margin: "0.8rem auto",
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
  caption: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
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
}));

const FormUser = ({
  values,
  handleChange,
  handlePrevStep,
  submitRegister,
  serverSideError,
}) => {
  const classes = useStyles();
  const { handleSubmit, errors } = useForm(
    validateRegisterStep2,
    submitRegister,
    values
  );

  const disableButton = !(
    values.username &&
    values.email &&
    values.password &&
    values.password2
  );
  return (
    <div className={classes.container}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" color="primary" className={classes.title}>
          Crear cuenta
        </Typography>
        <Typography variant="caption" className={classes.caption}>
          Paso 2 de 2
        </Typography>
      </Box>
      {serverSideError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {serverSideError}
        </Alert>
      )}
      <form style={{ margin: "2rem auto" }} onSubmit={handleSubmit} noValidate>
        <div className={classes.wrapper}>
          <TextField
            id="outlined-firstName"
            variant="outlined"
            color="primary"
            fullWidth
            className={`${classes.root} ${classes.input}`}
            label="Nombre de Usuario"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username ? true : false}
            helperText={errors.username}
            required
          />
          <TextField
            id="outlined-lastName"
            variant="outlined"
            color="primary"
            fullWidth
            className={`${classes.root} ${classes.input}`}
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
            className={`${classes.root} ${classes.input}`}
            label="Contraseña"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
            required
            type="password"
          />
          <TextField
            id="outlined-adress"
            variant="outlined"
            color="primary"
            fullWidth
            className={`${classes.root} ${classes.input}`}
            label="Repetir contraseña"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            error={errors.password2 ? true : false}
            helperText={errors.password2}
            required
            type="password"
          />
        </div>
        <Box
          display="flex"
          flexDirection="column"
          width="60%"
          mx="auto"
          mt={7}
          className={classes.buttonWrapper}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={disableButton}
          >
            CONFIRMAR
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handlePrevStep}
          >
            <Link component={RouterLink} to="/">
              CANCELAR
            </Link>
          </Button>
        </Box>
      </form>
      <div style={{ textAlign: "center" }}>
        <Typography>Ya tenes cuenta?</Typography>
        <Typography>
          <Link component={RouterLink} to="/login">
            Hace click acá
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default FormUser;
