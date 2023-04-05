import { useState, useEffect } from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import fetchImages from 'Api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const ImageGallery = ({ seachImage }) => {
  const [currentArray, setCurrentArray] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisadled] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (currentImage !== seachImage && currentImage !== '') {
      setCurrentImage(seachImage);
      setCurrentArray([]);
      setPage(1);
      return;
    }

    if (currentImage !== seachImage && currentImage === '') {
      setCurrentImage(seachImage);
      return;
    }

    if (currentImage === '') {
      return;
    }

    const fetchImagesWithQuery = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const imagesArrey = await fetchImages(page, currentImage);

        if (imagesArrey.length === 0) {
          toast.info('There are no images for your request.');
          setCurrentArray([]);
          setPage(1);
          setIsLoading(false);
          setError(false);
          return;
        }

        if (imagesArrey.length === 12) setDisadled(true);
        else setDisadled(false);

        setCurrentArray(prevState => [...prevState, ...imagesArrey]);
        setIsLoading(false);
      } catch (error) {
        setCurrentArray([]);
        setPage(1);
        setError(true);
        setIsLoading(false);
        setError(false);
      }
    };

    fetchImagesWithQuery();
  }, [currentImage, page, seachImage]);

  const updatePage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Gallery>
        {currentArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webURL={webformatURL}
            largeURL={largeImageURL}
            tags={tags}
          />
        ))}
      </Gallery>
      {isLoading && <Loader />}
      {disabled && <Button nextPage={updatePage} />}
      {error && toast.error('Image loading error. Restart the application.')}
    </>
  );
};

ImageGallery.propTypes = {
  state: PropTypes.exact({
    currentArray: PropTypes.array,
  }),
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.string,
};

export default ImageGallery;
