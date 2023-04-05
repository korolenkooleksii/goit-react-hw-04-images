import { useState } from 'react';
import { ItemImage, ImageWeb, ImageLarge } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webURL, largeURL, tags }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  return (
    <ItemImage>
      <ImageWeb src={webURL} alt={tags} onClick={toggleModal} />
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <ImageLarge src={largeURL} alt={tags} />
        </Modal>
      )}
    </ItemImage>
  );
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string,
  largeURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
