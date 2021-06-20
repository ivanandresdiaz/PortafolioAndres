import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';
import { BodyHero } from './styledHero';

const Hero = () => {
  const { mobile } = useContext(ThemeContext);
  return (
    <BodyHero>
      {mobile ? <HeroMobile /> : <HeroDesktop /> }
    </BodyHero>
  );
};

export default Hero;
