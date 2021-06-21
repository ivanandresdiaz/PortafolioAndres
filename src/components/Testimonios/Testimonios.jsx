import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import juanAntonio from '../../assets/juanAntonio.png';
import albertoFlorez from '../../assets/AlbertoFlorez.png';
import richardCooper from '../../assets/RichardCooper.png';
import elenaPeña from '../../assets/ElenaPeña.png';
import dairoMendoza from '../../assets/DarionMendoza.png';
import gerardoHiguita from '../../assets/GerardoHiguita.png';
import TestimoniosMobile from './TestimoniosMobile';
import TestimoniosDesktop from './TestimoniosDesktop';
import {H2Testimonios, DivTestimoniosContainerAll} from './styleTestimonio';

const Testimonios = () => {
  const { mobile } = useContext(ThemeContext);
  const testimonios = [
    {
      id: 10,
      name: 'Juan Antonio',
      testimony: 'Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Andres y como utiliza Javascript en el día a día.',
      avatar: juanAntonio,
    },
    {
      id: 11,
      name: 'Alberto Florez',
      testimony: 'Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente profesor Andres gran vocación.',
      avatar: albertoFlorez,
    },
    {
      id: 12,
      name: 'Richard Cooper',
      testimony: 'La forma como explica y trabaja los temas Andres, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS. ',
      avatar: richardCooper,
    },
    {
      id: 13,
      name: 'Elena Peña',
      testimony: 'Andres ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.',
      avatar: elenaPeña,
    },
    {
      id: 14,
      name: 'Dairo Mendoza',
      testimony: 'Andres ha superado mis expectativas desde el diseño hasta el desarrollo.',
      avatar: dairoMendoza
    },
    {
      id: 15,
      name: 'Gerardo Higuita',
      testimony: 'Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.',
      avatar: gerardoHiguita,
    }
  ];
  return (
    <DivTestimoniosContainerAll>
      <H2Testimonios>Testimonios</H2Testimonios>
      {mobile ? <TestimoniosMobile testimonios={testimonios} /> : <TestimoniosDesktop testimonios={testimonios} /> }
    </DivTestimoniosContainerAll>
  );
};

export default Testimonios;
