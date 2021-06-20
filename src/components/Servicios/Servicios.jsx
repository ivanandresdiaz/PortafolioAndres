import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import ServiciosDesktop from './ServiciosDesktop';
import ServiciosMobile from './ServiciosMobile';
import { DivServicios } from './styledServicios';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      especilidad: 'Diseño',
      items: [
        'Experiencia de usuario',
        'Interfaz de usuario',
        'Aplicaciones web',
        'Prueba de concepto',
      ],
    },
    {
      id: 2,
      especilidad: 'Desarrollo',
      items: [
        'Aplicaciones Mobiles',
        'Sitios web',
        'Aplicaciones web progresivas',
      ],
    },
    {
      id: 3,
      especilidad: 'Marca',
      items: ['Identidad de Marca', 'Estrategia de marca'],
    },
  ];
  const { mobile } = useContext(ThemeContext);
  return (
    <DivServicios>
      {mobile ? <ServiciosMobile servicios={servicios} /> : <ServiciosDesktop servicios={servicios} /> }
    </DivServicios>
  );
};

export default Servicios;
