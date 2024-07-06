import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from './redux/selectors';
import { changeFilter } from './redux/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <>
    <label>Find contacts by name or phone number</label>
    <input value={value} type="text" name="filter" onChange={onChange} />
  </>
  );
};

export default Filter;