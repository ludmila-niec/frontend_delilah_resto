import { useState, useEffect } from "react";

const useForm = (validate, callback, values) => {
    const [errors, setErrors] = useState({ firstName: "", lastName: "" });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleSubmit, errors };
};

export default useForm;
