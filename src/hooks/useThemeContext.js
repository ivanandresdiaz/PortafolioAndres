import { useState } from 'react';
import useMediaQuery from './useMediaQuery';

const useThemeContext = () => {
  const matches = useMediaQuery('(min-width: 769px)');
  const mobile = !matches;
  const [darkMode, setDarkMode] = useState(true);
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    darkMode,
    toogleDarkMode,
    toogleModal,
    mobile
  );
};

export default useThemeContext;

