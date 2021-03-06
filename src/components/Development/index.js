import React from 'react';

import { Row, Col, Container } from 'reactstrap';

//import general from '../../assets/images/apps/bamburgh-react-admin-dashboard-reactstrap-pro.jpg';
import general from '../../assets/images/apps/devComputer.jpg';

import hero1 from '../../assets/images/hero-bg/dev.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-deep-blue bg-composed-wrapper">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-7" />
          <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
            <Container className="pb-5 py-lg-5 text-center">
              <div className="mb-4">
                <h4 className="font-weight-bold text-white display-3">
                  Mobile and Web Development
                </h4>
                <Col md="11" lg="10" className="mx-auto">
                  <p
                    className="text-white opacity-6 mt-3 mb-5 font-size-xxl"
                    style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>
                    ModusLights has been developing both web and mobile
                    applications with highly responsive user interface coupled
                    with topnotch user experience for a variety of customers for
                    over 10 years. We are constantly pushing the boundaries of
                    what’s possible while designing and creating our solutions.
                    Either the idea is our client’s or our internal projects, we
                    are dedicated to ensuring the idea is transformed into a
                    beautifully designed, user friendly and engaging solution of
                    a superior quality.
                  </p>
                </Col>
              </div>
              <Row>
                <Col md="6">
                  <div className="card shadow-sm-dark rounded-xlg bg-transparent">
                    <div className="card-img-wrapper">
                      <img
                        src={general}
                        className="rounded-lg  img-fit-container"
                        alt="..."
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="w-100 mb-3 mb-xl-0">
                    <Col md="12" xl="12">
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3 opacity-6">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            title=""
                            className="text-first">
                            ...
                          </a>
                        </h3>
                        <p
                          className="text-white opacity-6 mb-3 font-size-lg"
                          style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>
                          Our team has years of experience working with Fortune
                          100 - 500 companies and we are very obsessed with R&D.
                          This helps us stay ahead of the technology curve, as
                          such ensuring we are using the latest technology to
                          drive the different solutions we bring to our
                          customers.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
