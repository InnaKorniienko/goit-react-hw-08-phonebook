import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={style.divContainer}>
      <ContactForm />

      <h2 className={style.title}>Find contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
