import PropTypes from 'prop-types';

import { ItemImage, ImageWeb } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webURL, largeURL, tags, onImageClick }) => {
  return (
    <ItemImage>
      <ImageWeb
        src={webURL}
        alt={tags}
        onClick={() => {
          onImageClick(largeURL);
        }}
      />
    </ItemImage>
  );
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  largeURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
