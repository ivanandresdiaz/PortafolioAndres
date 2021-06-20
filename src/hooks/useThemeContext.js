import { useState } from 'react';
import useMediaQuery from './useMediaQuery';

const useThemeContext = () => {
  const matches = useMediaQuery('(min-width: 769px)');
  const mobile = !matches;
  const [darkMode, setDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toogleModal = (payload) => {
    setShowModal(!payload);
  };
  const toogleDarkMode = (payload) => {
    setDarkMode(!payload);
  };
  return {
    toogleDarkMode,
    toogleModal,
    mobile,
    darkMode,
    showModal,
  };
};

export default useThemeContext;

