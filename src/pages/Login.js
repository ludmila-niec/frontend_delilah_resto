import React, { useState } from "react";
import Header from "../components/Auth/Header";
import LoginForm from "../components/Auth/LoginForm";
import { Grid } from "@material-ui/core";

const Login = ({ history }) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={1} />
                <Grid item container xs={10}>
                    <LoginForm
                        values={values}
                        handleChange={handleChange}
                        history={history}
                    />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </>
    );
};

export default Login;
