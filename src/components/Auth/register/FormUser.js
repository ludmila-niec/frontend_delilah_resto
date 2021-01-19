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
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    button: {
        marginBottom: "1.5rem",
        width: "100%",
        fontSize: "1rem",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.2rem",
        },
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
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h2" color="primary">
                    Crear cuenta
                </Typography>
                <Typography variant="caption">Paso 2 de 2</Typography>
            </Box>
            {serverSideError && (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {serverSideError}
                </Alert>
            )}
            <form
                style={{ margin: "2rem auto" }}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField
                    id="outlined-firstName"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className={classes.root}
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
                    className={classes.root}
                    label="Repetir contraseña"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    error={errors.password2 ? true : false}
                    helperText={errors.password2}
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
                        CONFIRMAR
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={handlePrevStep}
                    >
                        <Link component={RouterLink} to="/">
                            volver atras
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
