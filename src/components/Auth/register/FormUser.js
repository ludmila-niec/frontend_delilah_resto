import React, { useState, useEffect } from "react";
import useForm from "../../../Hooks/useForm";
import Modal from "../../Modal/Modal";
import ModalLoading from "../../Modal/ModalLoading";
import ModalSuccess from "../../Modal/ModalSuccess";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";
import { validateRegister2 } from "../validate";
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
        marginTop: "4.5rem",
        marginBottom: "4.5rem",
    },
    button: {
        marginBottom: "1.5rem",
        width: "100%",
        fontSize: "1rem",
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.2rem",
        },
    },
}));

const loadingMsg = {
    title: "Registrando usuario nuevo",
};
const successMsg = {
    title: "Registro exitoso!",
    textInfo:
        "Gracias por registrate en Delilah Resto. A continuación tenés que iniciar sesión",
    btnPrimary: "iniciar sesión",
    btnSecondary: "ir al inicio",
};

const redirectLogin = "/login";
const redirectBack = "/";

const FormUser = ({
    handlePrevStep,
    values,
    handleChange,
    location,
    history,
}) => {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { handleSubmit, errors } = useForm(
        validateRegister2,
        submitNextStep,
        values
    );
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    // const redirect = location.search ? location.search.split("=")[1] : "/login";
    useEffect(() => {
        if (userInfo) {
            setTimeout(() => {
                setModalIsOpen(false);
                history.push("/login");
            }, 4000);
        }
    }, [history, userInfo]);

    useEffect(() => {
        if (error) {
            setModalIsOpen(false);
        }
    }, [error]);

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    function submitNextStep() {
        setModalIsOpen(true);
        const {
            firstName,
            lastName,
            phone,
            adress,
            username,
            email,
            password,
        } = values;
        dispatch(
            register({
                firstName,
                lastName,
                phone,
                adress,
                username,
                email,
                password,
            })
        );
        console.log(values);
    }

    return (
        <>
            <div className={classes.container}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="subtitle1">Crear Cuenta</Typography>
                    <Typography variant="caption">Paso 2 de 2</Typography>
                </Box>
                {error && (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
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
                        helperText={errors.username ? errors.username : ""}
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
                        helperText={errors.email ? errors.email : ""}
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
                        required
                        error={errors.password ? true : false}
                        helperText={errors.password ? errors.password : ""}
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
                        helperText={errors.password2 ? errors.password2 : ""}
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
            {modalIsOpen && (
                <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
                    {loading && <ModalLoading message={loadingMsg} />}
                    {userInfo && (
                        <ModalSuccess
                            message={successMsg}
                            linkPrimary={redirectLogin}
                            linkSecondary={redirectBack}
                        />
                    )}
                </Modal>
            )}
        </>
    );
};

export default FormUser;
