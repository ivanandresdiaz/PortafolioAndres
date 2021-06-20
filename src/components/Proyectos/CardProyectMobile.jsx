import React from 'react';
import { DivContainerCardMobile, ButtonVerProyecto, ButtonVerCodigo, ImgCardProyect, DivButtons, PWhite, H4White, DivContainerDescriptionCardMobile } from './styledProyectosMobile';

const CardProyectMobile = ({ title, description, image, id }) => {
  return (
    <DivContainerCardMobile>
      <ImgCardProyect src={image} alt='proyecto' />
      <DivContainerDescriptionCardMobile>
        <H4White>{title}</H4White>
        <PWhite>{description}</PWhite>
        <DivButtons>
          <ButtonVerCodigo>Ver Codigo</ButtonVerCodigo>
          <ButtonVerProyecto>Ver Proyecto Completo</ButtonVerProyecto>
        </DivButtons>
      </DivContainerDescriptionCardMobile>
    </DivContainerCardMobile>
  );
};

export default CardProyectMobile;
