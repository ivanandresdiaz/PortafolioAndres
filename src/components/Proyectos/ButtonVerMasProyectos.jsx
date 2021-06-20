import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { DivButtonContainerMas, ButtonVerMas } from './styledButtonVerMasProyectos';

const ButtonVerMasProyectos = () => {
  return (
    <DivButtonContainerMas>
      <ButtonVerMas>
        <h4>Ver mas proyectos</h4>
        <MdArrowForward color="#0F0E17" size="3rem" />
      </ButtonVerMas>
    </DivButtonContainerMas>
  );
};

export default ButtonVerMasProyectos;
