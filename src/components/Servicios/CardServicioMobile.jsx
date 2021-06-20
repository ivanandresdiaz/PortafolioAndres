import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import {DivCardServicioMobile, ButtonCardServicioMobile, H2CardServicioMobile, PItemMobile} from './styledServiciosMobile';
const styledCardMobile = (props) => {
  const { especilidad, items } = props;
  return (
    <DivCardServicioMobile>
      <H2CardServicioMobile>{especilidad}</H2CardServicioMobile>
      {items.map((item, index) => <PItemMobile key={`${especilidad}${index}`}>{item}</PItemMobile>)}
      <ButtonCardServicioMobile type="button" >
        {`Ver servicios de ${especilidad}`}
        <MdArrowForward size="1.5rem" />
      </ButtonCardServicioMobile>
    </DivCardServicioMobile>
  )
}

export default styledCardMobile