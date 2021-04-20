import React from "react";
import { TextField, Box, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import useForm from "../../../Hooks/useForm";
import { validateRegisterStep1 } from "../../../tools/validation/validate";

const useStyles = makeStyles((theme) => ({
  wrapper:{
      [theme.breakpoints.up('lg')]:{
          display:"flex",
          flexWrap:"wrap",
      }
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  caption:{
      [theme.breakpoints.up('lg')]:{
          fontSize:"1rem"
      },
  },
  input: {
    margin: "0.8rem auto",
    [theme.breakpoints.up('lg')]:{
        width:"40%"
    }
  },
  buttonWrapper:{
    [theme.breakpoints.up('lg')]:{
        alignItems:"center",
        width:"40%"
    }
  },
  button: {
    marginBottom: "1.5rem",
    width: "100%",
    fontSize: "1rem",
  },
}));

const FormPersonal = ({ values, handleChange, handleNextStep }) => {
  const classes = useStyles();

  const { handleSubmit, errors } = useForm(
    validateRegisterStep1,
    handleNextStep,
    values
  );

  const disableButton = !(
    values.firstName &&
    values.lastName &&
    values.phone &&
    values.adress
  );

  return (
    <div className={classes.container}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography variant="h2" color="primary" className={classes.title}>
            Crear cuenta
          </Typography>
          <Typography variant="caption" className={classes.caption}>Paso 1 de 2</Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          style={{ margin: "2rem auto" }}
          noValidate
        >
            <div className={classes.wrapper}>
          <TextField
            id="outlined-firstName"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.input}
            label="Nombre"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? errors.firstName : ""}
            required
          />
          <TextField
            id="outlined-lastName"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.input}
            label="Apellido"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
            required
          />
          <TextField
            id="outlined-phone"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.input}
            label="Telefono"
            name="phone"
            type="number"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
            required
          />
          <TextField
            id="outlined-adress"
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.input}
            label="Domicilio"
            name="adress"
            value={values.adress}
            onChange={handleChange}
            error={errors.adress ? true : false}
            helperText={errors.adress}
            required
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
              disabled={disableButton}
              type="submit"
            >
              SIGUIENTE
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              component={RouterLink}
              to="/"
            >
              CANCELAR
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

export default FormPersonal;
