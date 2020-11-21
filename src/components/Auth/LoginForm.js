import React, { useState, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import Modal from "../Modal/Modal";
import ModalLoading from "../Modal/ModalLoading";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { validateLogin } from "./validate";
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
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
    title: "Iniciando sesión...",
};

const LoginForm = ({ history, values, handleChange }) => {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { handleSubmit, errors } = useForm(
        validateLogin,
        submitLogin,
        values
    );
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo, error } = userLogin;

    useEffect(() => {
        if (userInfo) {
            setModalIsOpen(false);
            history.push("/home");
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

    function submitLogin() {
        setModalIsOpen(true);
        const { email, password } = values;
        //dispatch action login
        dispatch(login({ email, password }));
    }
    return (
        <>
            <div className={classes.container}>
                <div>
                    <Typography variant="subtitle1">Iniciar Sesión</Typography>
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
            {modalIsOpen && (
                <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
                    {loading && <ModalLoading message={loadingMsg} />}
                </Modal>
            )}
        </>
    );
};

export default LoginForm;
