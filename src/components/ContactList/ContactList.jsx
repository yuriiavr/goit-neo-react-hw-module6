import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ul className={css.contactsList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <p className={css.noContactsMessage}>No contacts matching your search.</p>
        )}
      </ul>
    </>
  );
};

export default ContactList;