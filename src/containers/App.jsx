import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import Proyectos from '../components/Proyectos/Proyectos';
import Servicios from '../components/Servicios/Servicios';
import Testimonios from '../components/Testimonios/Testimonios';
import Carousel from '../components/Carousel/Carousel';
import Contacto from '../components/Contacto/Contacto';
import Footer from '../components/Footer/Footer';
import useThemeContext from '../hooks/useThemeContext';
import Wakatime from '../components/Wakatime/Wakatime';

const App = () => {
  const ThemeContextState = useThemeContext();
  return (
    <>
      <ThemeContext.Provider value={ThemeContextState}>
        <Header />
        <Hero />
        <Proyectos />
        <Servicios />
        <Testimonios />
        <Carousel />
        <Contacto />
        <Wakatime />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
