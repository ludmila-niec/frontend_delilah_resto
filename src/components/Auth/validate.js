export function validateRegister1(values) {
    const requiredField = "Este campo es requrido";
    let errors = {};
    if (!values.firstName) {
        errors.firstName = requiredField;
    } else if (!/^[a-z _]+$/i.test(values.firstName)) {
        errors.firstName = "Ingresar solo letras";
    }
    if (!values.lastName) {
        errors.lastName = requiredField;
    } else if (!/^[a-z _]+$/i.test(values.lastName)) {
        errors.lastName = "Apellido solo acepta letras";
    }
    if (!values.phone) {
        errors.phone = requiredField;
    } else if (!/^[0-9]+$/i.test(values.phone)) {
        errors.phone = "Ingresar solo numeros sin espacios";
    }
    if (!values.adress) {
        errors.adress = requiredField;
    } else if (!/^[A-Z0-9 _]*$/i.test(values.adress)) {
        errors.adress = "dirección inválida";
    }

    return errors;
}

export function validateRegister2(values) {
    const requiredField = "Este campo es requrido";
    let errors = {};
    if (!values.username) {
        errors.username = requiredField;
    } else if (!/^[a-z _]+$/i.test(values.username)) {
        errors.username = "Ingresar solo letras";
    }

    if (!values.email) {
        errors.email = requiredField;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Correo electronico invalido";
    }

    if (!values.password) {
        errors.password = requiredField;
    } else if (values.password.length < 6) {
        errors.password = "La contraseña debe tener minimo 6 caracteres";
    }
    if (!values.password2) {
        errors.password2 = requiredField;
    } else if (values.password2 !== values.password) {
        errors.password2 = "Las contraseñas no coinciden";
    }

    return errors;
}
