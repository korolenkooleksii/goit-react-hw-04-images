import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ handleFormSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.error('Enter a keyword to search for a picture.');
      return;
    }
    
    handleFormSubmit(value.toLowerCase().trim());
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
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
