import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import ProyectosMobile from './ProyectosMobile';
import ProyectosDesktop from './ProyectosDesktop';
import imgAmazonas from '../../assets/amazon.png';
import imgPrincipe from '../../assets/principe.png';
import imgNiko from '../../assets/Niko.png';
import {DivProyectos } from './styledProyectos';
import ButtonVerMasProyectos from './ButtonVerMasProyectos';

const Proyectos = () => {
  const { mobile } = useContext(ThemeContext);
  const proyectos = [
    {
      id: 1,
      title: 'Niko',
      description: 'Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.',
      image: imgNiko,
    },
    {
      id: 2,
      title: 'Principe Fresco',
      description: 'La serie está protagonizada por Will Smith como una versión ficticia de sí mismo , un callejero. -Adolescente inteligente nacido y criado...',
      image: imgPrincipe,
    },
    {
      id: 3,
      title: 'Amazonas',
      description: 'Amazonas es la empresa en internet de venta al por menor más grande del mundo, donde puedes encontrar prácticamente...',
      image: imgAmazonas,
    },
  ];
  return (
    <DivProyectos>
      {mobile ? <ProyectosMobile proyectos={proyectos} /> : <ProyectosDesktop proyectos={proyectos} /> }
      <ButtonVerMasProyectos />
    </DivProyectos>
  );
};

export default Proyectos;
