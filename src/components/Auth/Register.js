import React, { useState} from "react";
import FormPersonal from "./register/FormPersonal";
import FormUser from "./register/FormUser";

const Register = () => {
    const [stepForm, setStepForm] = useState(1);
    
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
            {stepForm === 1 && <FormPersonal handleNextStep={handleNextStep} />}
            {stepForm === 2 && <FormUser handleNextStep={handleNextStep} handlePrevStep={handlePrevStep}/>}
            {stepForm === 3 && <h1>Registro Ok!</h1>}
        </>
    );
   

};


export default Register;
