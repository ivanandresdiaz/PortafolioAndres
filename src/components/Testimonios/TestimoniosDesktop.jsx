import React from 'react';
import TestimoniosCard from './TestimoniosCard';
import { DivTestimonioDesktop } from './styleTestimonio';

const TestimoniosDesktop = (props) => {
  const { testimonios } = props;
  return (
    <DivTestimonioDesktop>
      {testimonios.map((item) => <TestimoniosCard key={item.id} name={item.name} testimony={item.testimony} avatar={item.avatar} />)}
    </DivTestimonioDesktop>
  );
};

export default TestimoniosDesktop;
