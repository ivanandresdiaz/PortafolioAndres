import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import imgHero from '../../assets/hero.jpg';
import { ImgHero, DivLayoutMobileHero, H2White, PWhite, DivTitleHero } from './styledHeroMobile';

const HeroMobile = () => {
  return (
    <DivLayoutMobileHero>
      <ImgHero src={imgHero} alt='Andres Diaz' />
      <DivTitleHero>
        <H2White>¡Hola a todos!</H2White>
        <H2White>Soy Andres Diaz</H2White>
      </DivTitleHero>
      <PWhite>
        Developer que le encanta implementar diseños que
        inspiran y atraen a las personas.
      </PWhite>
      <MdKeyboardArrowDown color='#FF8906' size='6rem' />
    </DivLayoutMobileHero>
  );
};

export default HeroMobile;
