import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import useForm from "components/shared/Hooks/UseForm";
import TextField from "../shared/Components/TextField";
import initialState from "./InitialState";
import fields from "./Fields";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <button>Login</button>
        </form>
    )
}

export default LoginForm;

LoginForm.defaultProps = {
    onSubmit: () => {}
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}