import React from 'react';

import { Row, Col, Container } from 'reactstrap';

import stock1 from '../../assets/images/stock-photos/stock-6.jpg';
import stock2 from '../../assets/images/stock-photos/stock-7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="feature-box">
        <Container className="py-5">
          <div className="text-center">
            <h1 className="display-3 text-black mb-2 font-weight-bold">
              Our Values and Culture
            </h1>
            <p className="font-size-xl mb-0 mb-lg-5 text-black-50">
              We pride ourselves on the words of 2 great icons when it comes to delivery of quality products and services -            </p>
          </div>
          <Row className="no-gutters">
            <Col xl="6" className="overflow-hidden d-flex">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block w-100 hover-scale-rounded">
                <img src={stock1} className="img-fit-container" alt="..." />
              </a>
            </Col>
            <Col xl="6" className="bg-white d-flex align-items-center">
              <div className="p-4 p-lg-5">
                <h1 className="display-4 font-weight-bold mb-4" >
                  Remote culture
                </h1>
                <p className="font-size-xl text-black-50"  style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>
                  The world is a home big home for us all, so why should we confine ourselves to one office space?
                  We have experts working from different countries and time zones and we pride on this as part of our strengths.
                  ModusLights values its remote workforce. We’re a remote-first company. This means we’re proactive sharers,
                  flexible schedulers, and generally cheerful collaborators — no matter where we’re working from.
                </p>
              </div>
            </Col>
            <Col
              xl="6"
              className="bg-second d-flex align-items-center text-white">
              <div className="p-4 text-center p-lg-5">
                <h1 className="display-4 font-weight-bold mb-4">
                  Trust
                </h1>
                <p className="font-size-xl text-white-50"  style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>
                  We are a team of responsible, accountable and caring people that you can trust.
                  This is how we continue to do great things together. We practice paired designs, reviews,
                  engagements and even programming on many projects, inspiring a great sense of camaraderie along the way.
                </p>
              </div>
            </Col>
            <Col xl="6" className="overflow-hidden d-flex">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block w-100 hover-scale-rounded">
                <img src={stock2} className="img-fit-container" alt="..." />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
