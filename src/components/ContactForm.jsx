import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './redux/selectors';
import { addContacts } from './redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <section className={styles.form}>
    <h1 className={styles.form__title}>Phonebook</h1>
    <form className={styles.form__container} onSubmit={handleSubmit}>
      <label className={styles.form__label}>Name</label>
      <input
        type="text"
        name="name"
        className={styles.form__input}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      />
      <label className={styles.form__label}>Number</label>
      <input
        type="tel"
        name="number"
        className={styles.form__input}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        required
      />
      <button className={styles.form__btn} type="submit">
        Add contact
      </button>
    </form>
  </section>
  );
};

export default ContactForm;