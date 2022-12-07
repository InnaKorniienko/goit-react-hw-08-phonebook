import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PhonebookAdd from './PhonebookAdd/PhonebookAdd';
import Contactlist from './Contactlist';

import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-operation';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { getState } from "../../redux/contacts/contacts-selectors";

import Filter from './Filter';
import css from './Phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilter);
  const { loading } = useSelector(getState);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const getFilteredContacts = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.phonebook}>
        <h2>Phoneboook</h2>
        <PhonebookAdd onSubmit={onAddContact} />
      </div>
      <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter
          type="text"
          value={filter}
          name="filter"
          onChange={getFilteredContacts}
          placeholder="filter"
        />
        {!loading && contacts.length > 0 && <Contactlist items={contacts} removeContact={onRemoveContact} />}
        {loading && <p>...loading</p>}
      </div>
    </div>
  );
};

export default Phonebook;

// import PhonebookAdd from "./PhonebookAdd";
// import Contactlist from "./Contactlist";
// import Filter from "./Filter";
// import css from "./Phonebook.module.css";

// export default function Phonebook() {

// return (
//     <div className={css.container}>
//     <div className={css.phonebook}>
//         <h2>Phoneboook</h2>
//         <PhonebookAdd/>
//     </div>
//     <div className={css.contacts}>
//         <h2>Contacts</h2>
//         <Filter/>
//         <Contactlist/>
//     </div>
//     </div>
//     )
// }
