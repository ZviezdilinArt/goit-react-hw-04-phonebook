import PropTypes from 'prop-types'; 
import { Label } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </Label>
  );
};
 
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};