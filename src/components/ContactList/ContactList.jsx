import PropTypes from 'prop-types';
import { React } from 'react';
import { useSelector } from 'react-redux';

import ContactItem from './ContactItem/ContactItem';
import { ContactListBlock } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactListBlock>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactListBlock>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
