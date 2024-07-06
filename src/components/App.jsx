import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
import styles from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.container}>
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList>
        <Filter/>
      </ContactList>
    </div>
  </section>

  );
};

export default App;