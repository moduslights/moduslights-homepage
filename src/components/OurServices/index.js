import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import Services from './Services';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample() {
  const marketingTestimonials1 = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <>
      <Container className="py-5" id="service">
        <div className="text-center">
          <h1 className="display-3 text-black mb-2 font-weight-bold">
            Our Services
          </h1>
          <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
            At ModusLights, we offer a wide range of both business and technology solutions to our clients. Some of our core competencies includes the below to mention a few.
          </p>
        </div>
        <Services />
      </Container>
    </>
  );
}
