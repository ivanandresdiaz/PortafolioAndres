import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Proyectos from '../components/Proyectos';
import Servicios from '../components/Servicios';
import Testimonios from '../components/Testimonios';
import Carousel from '../components/Carousel';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import useThemeContext from '../hooks/useThemeContext';

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
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
