import React, { useState, useEffect } from "react";
import RegisterLoginLayout from "../components/common/RegisterLoginLayout";
import LoginForm from "../components/Auth/LoginForm";
import Modal from "../components/common/Modal/Modal";
import ModalLoading from "../components/common/Modal/ModalLoading";
import { validateLogin } from "../tools/validation/validate";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import useForm from "../Hooks/useForm";

const loadingMsg = {
    title: "Iniciando sesión...",
};
const Login = ({ history, user, loading, loginUser }) => {
    const [values, setValues] = useState({ email: "", password: "" });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { handleSubmit, errors } = useForm(
        validateLogin,
        submitLogin,
        values
    );

    useEffect(() => {
        if (user.token) {
            setModalIsOpen(false);
            history.push("/home");
        }
    }, [history, user.token]);

    useEffect(() => {
        if (user.error) {
            setModalIsOpen(false);
        }
    }, [user.error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((currentValues) => {
            return {
                ...currentValues,
                [name]: value,
            };
        });
    };
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    function submitLogin() {
        setModalIsOpen(true);
        const body = {
            email: values.email,
            password: values.password,
        };

        loginUser(body);
    }

    return (
        <>
            <RegisterLoginLayout>
                <LoginForm
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    user={user}
                />
            </RegisterLoginLayout>
            {modalIsOpen && (
                <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
                    {loading && <ModalLoading message={loadingMsg} />}
                </Modal>
            )}
        </>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        history: ownProps.history,
        user: state.userLogin,
        loading: state.apiCallsInProgress > 0,
    };
}

const mapDispatchToProps = {
    loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
