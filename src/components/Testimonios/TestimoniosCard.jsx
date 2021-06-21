import React from 'react';
import {DivCardTitle, PTestimonio, DivTestimonioCard} from './styledTestimoniosCard';

const TestimoniosCard = (props) => {
  const { name, avatar, testimony } = props;
  return (
    <DivTestimonioCard>
      <DivCardTitle>
        <img src={avatar} alt={name} />
        <h4>{name}</h4>
      </DivCardTitle>
      <PTestimonio>
        {testimony}
      </PTestimonio>
    </DivTestimonioCard>
  );
};

export default TestimoniosCard;
