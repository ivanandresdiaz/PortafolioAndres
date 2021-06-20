import React from 'react';
import { H2ServiciosMobile, DivServiciosMobile} from './styledServiciosMobile';
import CardServicioMobile from './CardServicioMobile';

const ServiciosMobile = ({servicios}) => {
  return (
    <DivServiciosMobile>
      <H2ServiciosMobile>Mobile</H2ServiciosMobile>
      {servicios.map((item) => <CardServicioMobile key={item.id} especilidad={item.especilidad} items={item.items}/>)}
    </DivServiciosMobile>
  );
};

export default ServiciosMobile;
