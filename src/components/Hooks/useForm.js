import { useState, useEffect } from "react";

const useForm = (validate, callback, values) => {
    // const [values, setValues] = useState({
    //     firstName: "",
    //     lastName: "",
    //     phone: "",
    //     adress: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     password2: "",
    // });

    const [errors, setErrors] = useState({ firstName: "", lastName: "" });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({ ...values, [name]: value });
    // };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && setIsSubmitting) {
            callback();
        }
    }, [errors]);

    return {handleSubmit, values, errors };
};

export default useForm;
