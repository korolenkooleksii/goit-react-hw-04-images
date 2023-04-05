import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Searchbar = ({ handleSerch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.error('Enter a keyword to search for a picture.');
      return;
    }

    handleSerch(value.toLowerCase().trim());
    setValue('');
  };


  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BsSearch />
        </SearchButton>
        <SearchInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  handleSerch: PropTypes.func,
};

export default Searchbar;
