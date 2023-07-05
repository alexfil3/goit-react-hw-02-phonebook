export const ContactListItem = ({ name, number, onDelete, id }) => {
  return (
    <li id={id}>
      {name}:<span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
