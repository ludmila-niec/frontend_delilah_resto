import React from "react";
import Header from "../Header";
import useForm from "../../Hooks/useForm";
import {validateRegister1} from "../validate";
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

const FormPersonal = ({handleNextStep}) => {
    const classes = useStyles();
    const { handleChange, handleSubmit, values, errors } = useForm(
        validateRegister1, submitNextStep
    );


    function submitNextStep() {
        handleNextStep()
    }

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container xs={10}>
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
                                Paso 1 de 2
                            </Typography>
                        </Box>
                        <form
                            style={{ margin: "2rem auto" }}
                            noValidate
                            onSubmit={handleSubmit}
                        >
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
                                helperText={
                                    errors.firstName ? errors.firstName : ""
                                }
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
                                helperText={
                                    errors.lastName ? errors.lastName : ""
                                }
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
                                helperText={errors.phone ? errors.phone : ""}
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
                                helperText={errors.adress ? errors.adress : ""}
                                required
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
                                    SIGUIENTE
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.button}
                                >
                                    CANCELAR
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

export default FormPersonal;
