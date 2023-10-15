import {  Wrapper } from 'components/Phonebook/Phonebook.styled';
import PropTypes from 'prop-types'; 
import { List } from './Contacts.styled';

export const Contacts = ({ data, onDeleteUser }) => {
  return (
    <Wrapper>
      <List>
        {data.map(({ id, name, number }) => (
          <li key={id}>
           {name}:  {number}
            <button type="button" onClick={() => (onDeleteUser(id))}>
              Delete
            </button>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};


Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func,
};