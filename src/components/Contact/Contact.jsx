import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/actions';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {contact.name} : {contact.phone}
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};
