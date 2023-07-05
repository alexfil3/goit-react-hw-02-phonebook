import { ContactListItem } from './ContactListItem/ContactListItem';
import { v4 as uuidv4 } from 'uuid';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            onDelete={onDelete}
            key={id}
            id={id}
          />
        );
      })}
    </ul>
  );
};
