
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/slice';

export const Contact = ({ contact }) => {
  const dispactch = useDispatch();
  return (
    <li>
      {contact.name} : {contact.number}
      <button
        type="button"
        onClick={() => {
          dispactch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};


