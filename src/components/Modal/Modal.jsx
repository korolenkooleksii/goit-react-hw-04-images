import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { BackDrop, Content } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children }) => {
  
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <Content>{children}</Content>
    </BackDrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};
