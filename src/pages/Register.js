import React, { useState, useEffect } from "react";
import RegisterLoginLayout from "../components/common/RegisterLoginLayout";
import FormPersonal from "../components/Auth/register/FormPersonal";
import FormUser from "../components/Auth/register/FormUser";
import Modal from "../components/Modal/Modal";
import ModalSuccess from "../components/Modal/ModalSuccess";
import ModalLoading from "../components/Modal/ModalLoading";
//redux
import { connect } from "react-redux";
import { registerNewUser } from "../redux/actions/userActions";

//modal info
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

const Register = ({ history, user, registerNewUser, loading }) => {
  const [stepForm, setStepForm] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    adress: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //   useEffect(() => {
  //     if (user.token) {
  //       history.push("/home");
  //     }
  //   }, [history, user]);

  useEffect(() => {
    // if user is already logged in, redirect to home page
    if (user.token) {
      return history.push("/home");
    }
    if (user.data) {
      setTimeout(() => {
        setModalIsOpen(false);
        history.push("/login");
      }, 4000);
    } else {
      setModalIsOpen(false);
    }
  }, [history, user]);

  //   useEffect(() => {
  //     if (user.error) {
  //       setModalIsOpen(false);
  //     }
  //   }, [user.error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [name]: value,
      };
    });
  };

  //next step FormPersonal a => FormUser
  function handleNextStep() {
    return setStepForm(stepForm + 1);
  }

  //previous step FormUser => FormPersonal
  function handlePrevStep() {
    return setStepForm(stepForm - 1);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  function submitRegister() {
    setModalIsOpen(true);
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      adress: values.adress,
      username: values.username,
      email: values.email,
      password: values.password,
    };

    registerNewUser(body);
  }

  return (
    <>
      <RegisterLoginLayout>
        {stepForm === 1 && (
          <>
            <FormPersonal
              values={values}
              handleChange={handleChange}
              handleNextStep={handleNextStep}
            />
          </>
        )}
        {stepForm === 2 && (
          <FormUser
            values={values}
            handleChange={handleChange}
            handlePrevStep={handlePrevStep}
            submitRegister={submitRegister}
            serverSideError={user.error}
          />
        )}
      </RegisterLoginLayout>
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
          {loading && <ModalLoading message={loadingMsg} />}
          {user.data && (
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

function mapStateToProps(state, ownProps) {
  return {
    history: ownProps.history,
    user: state.userRegister,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  registerNewUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
