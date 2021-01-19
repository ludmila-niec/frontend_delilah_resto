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
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        [theme.breakpoints.up("sm")]: {
            fontSize: "2rem",
        },
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

const LoginForm = ({ values, errors, handleChange, handleSubmit, user }) => {
    const classes = useStyles();
    const disableButton = !(values.email && values.password);

    return (
        <div className={classes.container}>
            <div>
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.title}
                >
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
            </div>
            <div style={{ textAlign: "center" }}>
                <Typography>No tenes cuenta?</Typography>
                <Typography>
                    <Link component={RouterLink} to="/register">
                        Hace click acá
                    </Link>
                </Typography>
            </div>
        </div>
    );
};

export default LoginForm;
