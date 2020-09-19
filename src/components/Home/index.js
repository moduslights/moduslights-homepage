import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import particles2 from '../../assets/images/hero-bg/particles-2.svg';
import hero1 from '../../assets/images/hero-bg/hero-1.jpg';

import OverviewHeader from './OverviewHeader.js';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-deep-sky">
        <Container>
          <OverviewHeader />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-7"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-6" />
          <div className="bg-composed-wrapper--bg bg-primary opacity-6" />
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + particles2 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over shadow-container-content-5 text-white text-center pt-5">
              <Col md="11" lg="10" xl="8" className="mx-auto py-3 py-lg-5">
                <h2 className="display-3 font-weight-bold">
                  WE TURN IDEAS INTO SOFTWARE
                </h2>
                <h3> THAT SUPPORT EVERYDAY LIFE</h3>
                <p className="font-size-xl py-3 text-white-50">
                  We build scalable and reliable applications to support both individuals and business enterprise
                </p>
                <div className="py-4 mb-4">
                  <Button
                    tag={NavLink}
                    to="/DashboardCommerce"
                    size="lg"
                    className="btn-pill shadow-second-sm"
                    color="first">
                    <span className="btn-wrapper--label">
                      Learn More
                    </span>
                  </Button>
                </div>
              </Col>
            </Container>
            <div className="shadow-container-blocks-5 z-below">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
