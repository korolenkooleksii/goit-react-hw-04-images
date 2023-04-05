import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop, Content } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClicl = e => {
    if (e.target === e.currentTarget) {
      console.log('Кликнули на backdrop');
      onClose();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClicl}>
      <Content>{children}</Content>
    </BackDrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
