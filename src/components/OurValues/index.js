import React from 'react';

import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink as NavLinkStrap
} from 'reactstrap';

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
              We pride ourselves on the words of 2 great icons when it comes to
              delivery of quality products and services -
            </p>
            <p>
              <q>
                <i>
                  Be a yardstick of quality. Some people aren't used to an
                  environment where excellence is expected.
                </i>
              </q>
              - <strong>Steve Jobs</strong>
            </p>
            <p>
              <q>
                <i>
                  There is only one boss. The customer. And he can fire
                  everybody in the company from the chairman on down, simply by
                  spending his money somewhere else.
                </i>
              </q>
              - <strong>Sam Walton</strong>
            </p>
          </div>
          <Row className="no-gutters">
            <Col md="6" className="overflow-hidden d-flex">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block w-100 hover-scale-rounded">
                <img src={stock1} className="img-fit-container" alt="..." />
              </a>
            </Col>
            <Col
              md="6"
              className="bg-second d-flex align-items-center text-white">
              <div className="p-4 p-lg-5">
                <div className="hover-scale-rounded">
                  <h1 className="display-4 font-weight-bold mb-4">
                    Our Values
                  </h1>
                  <div className="my-4 my-xl-0">
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <p
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-white-50">
                          <strong>- Honesty </strong> - in our
                          business conduct.
                        </p>
                      </NavItem>
                      <NavItem>
                        <p
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-white-50">
                          <strong>- Innovative </strong> - in all our solutions.
                        </p>
                      </NavItem>
                      <NavItem>
                        <p
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-white-50">
                          <strong className="py-1">- Fairness </strong> - in our
                          business dealings
                        </p>
                      </NavItem>
                      <NavItem>
                        <p
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-white-50">
                          <strong>- Servant Leadership </strong> - Serve the
                          common good.
                        </p>
                      </NavItem>
                      <NavItem>
                        <p
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-white-50">
                          <strong>- Accountable </strong> - Reliable and
                          responsible to our customers.
                        </p>
                      </NavItem>
                    </Nav>
                  </div>
                  {/*<p*/}
                  {/*  className="font-size-xl text-white-50 "*/}
                  {/*  style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>*/}
                  {/*  The world is a home big home for us all, so why should we*/}
                  {/*  confine ourselves to one office space? We have experts*/}
                  {/*  working from different countries and time zones and we pride*/}
                  {/*  on this as part of our strengths. ModusLights values its*/}
                  {/*  remote workforce. We’re a remote-first company. This means*/}
                  {/*  we’re proactive sharers, flexible schedulers, and generally*/}
                  {/*  cheerful collaborators — no matter where we’re working from.*/}
                  {/*</p>*/}
                </div>
              </div>
            </Col>
            <Col
              md="6"
              className="bg-second d-flex align-items-center text-white">
              <div className="p-4 text-center p-lg-5">
                <div className="hover-scale-rounded">
                  <h1 className="display-4 font-weight-bold mb-4">
                    {' '}
                    Remote culture{' '}
                  </h1>
                  <p
                    className="font-size-xl text-white-50"
                    style={{ lineHeight: '1.9', letterSpacing: '1.7' }}>
                    The world is a home big home for us all, so why should we
                    confine ourselves to one office space? We have experts
                    working from different countries and time zones and we pride
                    on this as part of our strengths. ModusLights values its
                    remote workforce. We’re a remote-first company. This means
                    we’re proactive sharers, flexible schedulers, and generally
                    cheerful collaborators — no matter where we’re working from.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" className="overflow-hidden d-flex">
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
