import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFiltered } from 'redux/Contacts/selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltered);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
