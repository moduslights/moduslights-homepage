import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container } from 'reactstrap';

import logo1 from '../../../assets/images/stock-logos/microsoft-icon.svg';
import logo2 from '../../../assets/images/stock-logos/google-icon.svg';
import logo3 from '../../../assets/images/stock-logos/spotify-icon.svg';
import logo4 from '../../../assets/images/stock-logos/instagram-icon.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4">
        <Container className="py-3">
          <Row>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <img alt="..." className="img-fit-container" src={logo1} />
                  </div>
                </div>
                <div className="pt-2 pl-4">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold d-flex align-items-center mb-2 d-flex">
                    <div className="font-size-lg">Consulting</div>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success ml-2">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                  </a>
                  <p className="mb-0 text-second opacity-7">
                    IT Service Management (ITSM) / Information Technology Infrastructural Library (ITIL),
                    Agile / Scrum Methodologies Quality Assurance (QA) Security
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <img alt="..." className="img-fit-container" src={logo2} />
                  </div>
                </div>
                <div className="pt-2 pl-4">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold d-flex align-items-center mb-2 d-flex">
                    <div className="font-size-lg">App Development</div>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success ml-2">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                  </a>
                  <p className="mb-0 text-second opacity-7">
                    Our team offers Web applications and Mobile - Android and iOS development
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <img alt="..." className="img-fit-container" src={logo3} />
                  </div>
                </div>
                <div className="pt-2 pl-4">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold d-flex align-items-center mb-2 d-flex">
                    <div className="font-size-lg">Training And Support</div>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success ml-2">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                  </a>
                  <p className="mb-0 text-second opacity-7">
                    ModusLights offers extensive training and support to its customers all over the world.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <img alt="..." className="img-fit-container" src={logo4} />
                  </div>
                </div>
                <div className="pt-2 pl-4">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold d-flex align-items-center mb-2 d-flex">
                    <div className="font-size-lg"> Internet of Things (IoT) </div>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success ml-2">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                  </a>
                  <p className="mb-0 text-second opacity-7">
                    Internet of Things (IoT)
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
