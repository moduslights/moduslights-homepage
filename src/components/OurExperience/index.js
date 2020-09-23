import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import Services from './Experiences';

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
            Our Experiences
          </h1>
          <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
            Our team members has executed for top companies around the world.
          </p>
        </div>
        <Services />
      </Container>
    </>
  );
}
