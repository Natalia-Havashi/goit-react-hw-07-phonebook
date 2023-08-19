import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';
import { getFiltered } from 'redux/Contacts/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltered);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h4>Find contacts by me</h4>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
};

export default Filter;
