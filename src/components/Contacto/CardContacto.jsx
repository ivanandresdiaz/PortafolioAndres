import React from 'react';
import { DivCardContacto, H1Contacto, PContacto, FormContacto, InputNombre, InputEmail, Textarea, ButtonContacto } from './styledCardContacto';

const CardContacto = () => {
  return (
    <DivCardContacto>
      <H1Contacto>Contacto</H1Contacto>
      <PContacto>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</PContacto>
      <FormContacto action=''>
        <InputNombre type='text' placeholder='Nombre Completo' />
        <InputEmail type='email' placeholder='Correo electrónico' />
        <Textarea placeholder='mensaje' cols="30" rows="10"></Textarea>
        <ButtonContacto type='button'>Enviar Mensaje</ButtonContacto>
      </FormContacto>
    </DivCardContacto>
  );
};

export default CardContacto;
