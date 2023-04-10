import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images = [], onImageClick }) => {
  return (
    <>
      {images && (
        <Gallery>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webURL={webformatURL}
              largeURL={largeImageURL}
              tags={tags}
              onImageClick={onImageClick}
            />
          ))}
        </Gallery>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
