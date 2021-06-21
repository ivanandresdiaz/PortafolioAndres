import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import imgHero from '../../assets/hero.jpg';
import { ImgHero, DivLayoutMobileHero, H2White, PWhite, DivTitleHero, SpanResponsive, SpanReact, SpanStack } from './styledHeroMobile';

const HeroMobile = () => {
  return (
    <DivLayoutMobileHero>
      <ImgHero src={imgHero} alt='Andres Diaz' />
      <DivTitleHero>
        <H2White>¡Hola a todos!</H2White>
        <H2White>Soy Andres Diaz</H2White>
      </DivTitleHero>
      <PWhite>
      Portafolio <SpanResponsive>Responsive </SpanResponsive>  desarrollado con <SpanReact>React</SpanReact> y <SpanStack>styled components</SpanStack>
      </PWhite>
      <MdKeyboardArrowDown color='#FF8906' size='6rem' />
    </DivLayoutMobileHero>
  );
};

export default HeroMobile;
