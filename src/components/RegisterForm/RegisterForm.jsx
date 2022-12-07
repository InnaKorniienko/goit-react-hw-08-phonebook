import { useMemo } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import initialState from "./InitialState";
import fields from "./Fields";
import useForm from "components/shared/Hooks/UseForm";
import TextField from "../shared/Components/TextField";


const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={nameId} value={name} handleChange={handleChange} {...fields.name} />
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <button>Register</button>
        </form>
    )
}

export default RegisterForm;

RegisterForm.defaultProps = {
    onSubmit: () => {}
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}