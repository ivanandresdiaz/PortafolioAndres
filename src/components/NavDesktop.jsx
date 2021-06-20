import React from 'react';
import { NavDesktopContainer, ContainerButtonDesktop, ContainerLinksNav, ImgLogo, ButtonDesktopurriculum } from './styledNavDesktop';
import logo from '../assets/logo.png';

const NavDesktop = () => {
  return (
    <NavDesktopContainer>
      <ContainerLinksNav>
        <ImgLogo src={logo} alt="logo" />
        <h1>Andres Diaz</h1>
        <a>Hola</a>
        <a>Proyecto</a>
        <a>Testimonios</a>
        <a>Contacto</a>
      </ContainerLinksNav>
      <ContainerButtonDesktop>
        <ButtonDesktopurriculum >
          Descargar curriculum
        </ButtonDesktopurriculum>
      </ContainerButtonDesktop>
    </NavDesktopContainer>
  )
}

export default NavDesktop;
