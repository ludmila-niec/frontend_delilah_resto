import { useState, useEffect, useCallback } from "react";

const useForm = (validate, callback, values) => {
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const submit = useCallback(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
    }
    // eslint-disable-next-line
  }, [errors, isSubmitting]);

  return { handleSubmit, errors };
};

export default useForm;
