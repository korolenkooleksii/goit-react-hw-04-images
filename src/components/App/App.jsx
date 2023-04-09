import { useState } from 'react';

import { useImageSearch } from 'components/hooks/useImageSearch';

import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';

import { Container, ImageLarge } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const { query, images, disabled, isLoading, handleFormSubmit, updatePage } =
    useImageSearch();

  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = largeURL => {
    toggleModal();
    setLargeImageURL(largeURL);
  };

  return (
    <Container>
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {disabled && <Button nextPage={updatePage} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <ImageLarge src={largeImageURL} alt={query} />
        </Modal>
      )}
      <ToastContainer theme="colored" />
    </Container>
  );
};
