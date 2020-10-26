import React, { useState} from "react";
import Header from './Header'
import FormPersonal from "./register/FormPersonal";
import FormUser from "./register/FormUser";
import {Grid} from '@material-ui/core'

const Register = () => {
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

     const handleChange = (e) => {
         const { name, value } = e.target;
         setValues({ ...values, [name]: value });
     };

    //siguiente paso FormPersonal a => FormUser
    function handleNextStep() {
        return setStepForm(stepForm + 1);
    }

    //retroceder de FormUser => FormPersonal
    function handlePrevStep() {
        return setStepForm(stepForm - 1);
    }

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container xs={10}>
                    {stepForm === 1 && (
                        <FormPersonal
                            handleNextStep={handleNextStep}
                            handleChange={handleChange}
                            formValues={values}
                            setValues={setValues}
                        />
                    )}
                    {stepForm === 2 && (
                        <FormUser
                            handleNextStep={handleNextStep}
                            handlePrevStep={handlePrevStep}
                            handleChange={handleChange}
                            formValues={values}
                            setValues={setValues}
                        />
                    )}
                    {stepForm === 3 && <h1>Registro Ok!</h1>}
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </>
    );
   

};


export default Register;
