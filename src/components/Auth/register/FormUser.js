import React from "react";
import Header from "../Header";
import useForm from "../../Hooks/useForm";
import { validateRegister2 } from "../validate";
import {
    Grid,
    TextField,
    Box,
    Typography,
    Button,
    Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "4.5rem",
        marginBottom: "4.5rem",
    },
    input: {
        margin: "0.8rem auto",
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

const FormUser = ({ handlePrevStep, handleNextStep }) => {
    const classes = useStyles();
    const { handleChange, handleSubmit, values, errors } = useForm(
        validateRegister2,
        submitNextStep
    );

    function submitNextStep() {
        handleNextStep();
    }

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <div className={classes.container}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                Crear Cuenta
                            </Typography>
                            <Typography variant="caption">
                                Paso 2 de 2
                            </Typography>
                        </Box>
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
                                className={classes.input}
                                label="Nombre de Usuario"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                error={errors.username ? true : false}
                                helperText={
                                    errors.username ? errors.username : ""
                                }
                                required
                            />
                            <TextField
                                id="outlined-lastName"
                                variant="outlined"
                                color="primary"
                                fullWidth
                                className={classes.input}
                                label="Correo Electronico"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email : ""}
                                required
                                type="email"
                            />
                            <TextField
                                id="outlined-phone"
                                variant="outlined"
                                color="primary"
                                fullWidth
                                className={classes.input}
                                label="Contraseña"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                required
                                error={errors.password ? true : false}
                                helperText={
                                    errors.password ? errors.password : ""
                                }
                                type="password"
                            />
                            <TextField
                                id="outlined-adress"
                                variant="outlined"
                                color="primary"
                                fullWidth
                                className={classes.input}
                                label="Repetir contraseña"
                                name="password2"
                                value={values.password2}
                                onChange={handleChange}
                                error={errors.password2 ? true : false}
                                helperText={
                                    errors.password2 ? errors.password2 : ""
                                }
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
                                >
                                    CONFIRMAR
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.button}
                                    onClick={handlePrevStep}
                                >
                                    VOLVER ATRAS
                                </Button>
                            </Box>
                        </form>
                        <div style={{ textAlign: "center" }}>
                            <Typography>Ya tenes cuenta?</Typography>
                            <Typography>
                                <Link href="#">Hace click acá</Link>
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </>
    );
};

export default FormUser;
