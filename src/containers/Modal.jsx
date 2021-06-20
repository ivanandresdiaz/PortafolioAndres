import React from 'react';
import ReactDOM from 'react-dom';
import { ModalDiv } from './styledModal';

const Modal = (props) => {
  const { isOpen, children } = props;
  if (isOpen) {
    return ReactDOM.createPortal(
      <ModalDiv className='Modal'>
        {children}
      </ModalDiv>,
      document.getElementById('modal'),

    );
  }
  return null;

};

export default Modal;
