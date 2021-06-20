import React, { useState, useEffect, useContext } from 'react';
import { MdReorder } from 'react-icons/md';
import { ButtonDownLoadCurriculum, NavHamburgerContainer, H1White, IconHamburgerContainer } from './styledHeader';
import ThemeContext from '../context/ThemeContext';

const NavHamburgesa = () => {
  const { toogleModal } = useContext(ThemeContext);
  const handleModal = () => {
    toogleModal();
  }
  const [showFixed, setShowFixed] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 90;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);
  const normal = () => (
    <>
      <NavHamburgerContainer>
        <MdReorder onClick={handleModal} color='#FF8906' size='40px' />
        <H1White>Andres Diaz</H1White>
        <ButtonDownLoadCurriculum>
          Curriculum
        </ButtonDownLoadCurriculum>
      </NavHamburgerContainer>
    </>

  );
  const fixed = () => (
    <>
      <IconHamburgerContainer>
        <MdReorder color='#FF8906' size='40px' />
      </IconHamburgerContainer>
    </>
  );
  return (
    <>
      {normal()}
      {showFixed && fixed()}
    </>
  );
};

export default NavHamburgesa;
