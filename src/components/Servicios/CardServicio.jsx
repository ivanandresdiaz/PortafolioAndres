/* eslint-disable react/no-array-index-key */
import React from 'react';
import {DivCardServicio, ButtonCardServicio, H2CardServicio, PItem} from './styledServiciosDesktop';
import { MdArrowForward } from 'react-icons/md';

const CardServicio = (props) => {
  const { especilidad, items } = props;
  return (
    <DivCardServicio>
      <H2CardServicio>{especilidad}</H2CardServicio>
      {items.map((item, index) => <PItem key={`${especilidad}${index}`}>{item}</PItem>)}
      <ButtonCardServicio type="button" >
        {`Ver servicios de ${especilidad}`}
        <MdArrowForward size="2.5rem" />
      </ButtonCardServicio>
    </DivCardServicio>
    
  );
};

export default CardServicio;
