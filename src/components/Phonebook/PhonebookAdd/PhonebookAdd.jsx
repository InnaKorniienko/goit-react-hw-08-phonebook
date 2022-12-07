import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import useForm from "../../shared/Hooks/UseForm";

import TextField from "../../shared/Components/TextField";
import css from "../Phonebook.module.css";

import initialState from "./InitialState";
import fields from "./Fields";

const PhonebookAdd = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> nanoid(), []);
    const phoneId = useMemo(()=> nanoid(), []);
  
   
    const {name, phone} = state;

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <TextField id={nameId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChange}
            {...fields.name} />
            <TextField id={phoneId}
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            onChange={handleChange}
            {...fields.number} />
            <button className={css.inputForm__button}>Add contact</button>
        </form>
    )
}

export default PhonebookAdd;


PhonebookAdd.defaultProps = {
    onSubmit: () => {}
}

PhonebookAdd.propTypes = {
    onSubmit: PropTypes.func,
}

// import { nanoid } from "nanoid";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { getContacts } from "redux/contacts/contacts-selectors";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contacts/contacts-operation";
// import { fetchContacts } from "redux/contacts/contacts-operation";
// import Notiflix from "notiflix";
// import css from "./Phonebook.module.css";

// const PhonebookAdd = () => {
//     const [name, setName] = useState("");
//     const [number, setNumber] = useState("");
//     const dispatch = useDispatch();
//     const contacts = useSelector(getContacts);

//     const nameId = nanoid();
//     const phoneId = nanoid();

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch])

//     const onAddContact = contact => {
//       if (isDublicate(contact)) {
//         Notiflix.Notify.warning(`${contact.name} or ${contact.phone} is already in contact`);
//         return;
//     }
//     const action = addContact(contact);
//     dispatch(action);
//     setName('');
//     setNumber('');
//     }

//         const isDublicate = ({ name, phone }) => {
//         const result = contacts.find(
//             contact => contact.name.toLowerCase() === name.toLowerCase() || contact.phone.toLowerCase() === phone.toLowerCase()
//     );
//         return result;
//     }


   
//     const handleChange = e => {
//         switch (e.currentTarget.name) {
//           case 'name':
//             setName(e.currentTarget.value);
//             break;
    
//           case 'number':
//             setNumber(e.currentTarget.value);
//             break;
    
//           default:
//             return;
//         }
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         onAddContact({name, phone: number})
//       }  

//       return (
//         <form className={css.form} onSubmit={handleSubmit} >
//         <div className={css.inputForm}>
//         <label className={css.label} htmlFor={nameId}> Name </label>
//         <input className={css.input}
//             id={nameId}
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             placeholder="Please add name"
//             required
//         />
//         </div>
//         <div className={css.inputForm}>
//         <label className={css.label} htmlFor={phoneId}> Number </label>
//         <input className={css.input}
//             id={phoneId}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             placeholder="Please add telnumber"
//             required
//         />
//         </div>
//         <button className={css.inputForm__button}> Add contact </button>
//         </form>
//     )
// }

// export default PhonebookAdd;