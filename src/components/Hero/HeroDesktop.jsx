import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import imgHero from '../../assets/hero.jpg';
import { DivLayoutHeroDesktop, ImgHero, H2White, SpanStack, SpanResponsive, SpanReact, DivContainerWords, PWhite, DivContainerImgHero } from './styledHeroDesktop';

const HeroDesktop = () => {
  return (
    <DivLayoutHeroDesktop>
      <DivContainerWords>
        <div>
          <H2White>¡Hola a todos!</H2White>
          <H2White>Soy Andres Diaz</H2White>
        </div>
        <PWhite>
          Portafolio <SpanResponsive>Responsive</SpanResponsive>  desarrollado con <SpanReact>React</SpanReact> y <SpanStack>styled components</SpanStack>
        </PWhite>
        <MdKeyboardArrowDown color='#FF8906' size='6rem' />
      </DivContainerWords>
      <DivContainerImgHero>
        <ImgHero src={imgHero} alt='Andres Diaz' />
      </DivContainerImgHero>
    </DivLayoutHeroDesktop>
  );
};

export default HeroDesktop;

