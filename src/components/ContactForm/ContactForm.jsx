import { ContainerForm } from 'components/styled.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/actions';
import { getContacts } from 'redux/Contacts/selector';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      const data = {
        name: name,
        number: phone,
      };
      dispatch(addContact(data));

      setName('');
      setPhone('');
    }
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="">Number</label>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
        />
        <button type="submit">Add contact</button>
      </form>
    </ContainerForm>
  );
};

export default Contacts;
