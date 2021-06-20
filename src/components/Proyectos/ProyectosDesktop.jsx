import React from 'react';
import CardProyectDesktop from './CardProyectDesktop';
import {DivContainerDesktop, DivContainerWordsDesktop, H2BlackDesktop, PBlackDesktop, DivItemsProjects} from './styledProyectosDesktop';

const ProyectosDesktop = ({proyectos}) => {
  return (
    <DivContainerDesktop>
      <DivContainerWordsDesktop>
        <H2BlackDesktop>Parece Magia, funciona con Codigo</H2BlackDesktop>
        <PBlackDesktop>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</PBlackDesktop>
      </DivContainerWordsDesktop>
      
      <DivItemsProjects>
        {proyectos.map((item) => <CardProyectDesktop key={item.id} description={item.description} title={item.title} image={item.image} id={item.id} />)}
      </DivItemsProjects>
    </DivContainerDesktop>
  );
};

export default ProyectosDesktop;
