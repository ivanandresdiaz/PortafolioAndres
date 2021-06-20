import React from 'react';
import { DivCardProyectDesktop, DivButtons, H4White, PWhite, DivCard, ButtonVerProyecto, ButtonVerCodigo } from './styledProyectosDesktop';

const CardProyectDesktop = ({ title, description, image, id }) => {
  return (
    <DivCardProyectDesktop image={image} className={`item-${id}`}>
      <DivCard>
        <H4White>{title}</H4White>
        <PWhite>{description}</PWhite>
        <DivButtons>
          <ButtonVerProyecto>Ver proyecto Completo</ButtonVerProyecto>
          <ButtonVerCodigo>Ver Codigo</ButtonVerCodigo>
        </DivButtons>
      </DivCard>
    </DivCardProyectDesktop>
  );
};

export default CardProyectDesktop;
