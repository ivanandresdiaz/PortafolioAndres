import React from 'react';
import CardServicio from './CardServicio';
import { H2ServiciosDesktop, DivServiciosDesktop, DivServiciosLayout } from './styledServiciosDesktop';

const ServiciosDesktop = ({servicios}) => {
  return (
    <DivServiciosDesktop>
      <H2ServiciosDesktop>Servicios</H2ServiciosDesktop>
      <DivServiciosLayout>
      {servicios.map((item) => <CardServicio key={item.id} especilidad={item.especilidad} items={item.items}/>)}
      </DivServiciosLayout>
    </DivServiciosDesktop>
  );
};

export default ServiciosDesktop;
