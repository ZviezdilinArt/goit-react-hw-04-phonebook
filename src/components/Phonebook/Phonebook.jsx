import { useState } from 'react';
import { Button, Label, Wrapper } from './Phonebook.styled';
import PropTypes from 'prop-types';

export const Phonebook = ({ onSubmit, data }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // state = {
  //   name: '',
  //   number: '',
  // };
 const handleOnChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error();
    }
    // this.setState({ [target.name]: target.value, [target.name]: target.value });
  };
 const handleOnSubmit = event => {
   event.preventDefault();
   onSubmit({ name, number });
   reset();
 };

  const reset = () => {
    setName('');
    setNumber('')
    // this.setState({ name: '', number: '' });
  };
  return (
    <Wrapper>
      <form onSubmit={handleOnSubmit}>
        <Label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleOnChange}
          />
        </Label>
        <Label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleOnChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </form>
    </Wrapper>
  );
};

  Phonebook.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    onSubmit: PropTypes.func,
  };