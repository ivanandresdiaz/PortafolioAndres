import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import NavHamburgesa from './NavHamburgesa';
import NavDesktop from './NavDesktop';
import { HeaderStyled } from './styledHeader';

const Header = () => {
  const { mobile } = useContext(ThemeContext);
  return (
    <HeaderStyled>
      {mobile ? <NavHamburgesa /> : <NavDesktop /> }
    </HeaderStyled>
  );
};

export default Header;
