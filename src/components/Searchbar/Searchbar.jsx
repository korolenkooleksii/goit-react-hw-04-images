import { Component } from 'react';
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

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast.error('Enter a keyword to search for a picture.');
      return;
    }

    this.props.handleSerch(this.state.value.toLowerCase().trim());
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BsSearch />
          </SearchButton>
          <SearchInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  handleSerch: PropTypes.func,
};

export default Searchbar;
