import React from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from './redux/selectors';
import { deleteContacts } from './redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <button className={styles.button} type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
  );
};

export default ContactList;