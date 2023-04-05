import { useState } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

const App =() => {
  
  const [searchValue, setSearchValue] = useState('');


  const creatSerchText = value => {
    setSearchValue(value);
  };

  
    return (
      <Container>
        <Searchbar handleSerch={creatSerchText} />
        <ImageGallery seachImage={searchValue} />
        <ToastContainer theme="colored" />
      </Container>
    );
  
}

App.propTypes = {
  value: PropTypes.string,
};

export default App;


