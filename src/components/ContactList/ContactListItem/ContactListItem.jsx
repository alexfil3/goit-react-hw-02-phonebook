import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, onDelete, id }) => {
  const { item, text, span, button } = css;
  return (
    <li id={id} className={item}>
      <p className={text}>
        {name}:<span className={span}>{number}</span>
      </p>
      <button className={button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
