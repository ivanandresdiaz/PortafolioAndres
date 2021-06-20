/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CardProyectMobile from './CardProyectMobile';
import {DivProyectoMobile, H2Black, PBlack } from './styledProyectosMobile';

const ProyectosMobile = ({ proyectos }) => {
  return (
    <DivProyectoMobile>
      <H2Black>Parece Magia, funciona con Codigo</H2Black>
      <PBlack>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</PBlack>
      {proyectos.map((item) => <CardProyectMobile key={item.id} title={item.title} id={item.id} description={item.description} image={item.image}/>)}
    </DivProyectoMobile>
  );
};

export default ProyectosMobile;
