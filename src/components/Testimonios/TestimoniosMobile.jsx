import React from 'react';
import TestimoniosCard from './TestimoniosCard';
import { DivTestimonioMobile } from './styleTestimonio';

const TestimoniosMobile = ({ testimonios }) => {
  return (
    <DivTestimonioMobile>
      {testimonios.map((item) => <TestimoniosCard key={item.id} name={item.name} testimony={item.testimony} avatar={item.avatar} />)}
    </DivTestimonioMobile>
  );
};

export default TestimoniosMobile;
