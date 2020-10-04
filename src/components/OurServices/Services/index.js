import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container } from 'reactstrap';

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import {
  faCamera,
  faLaptopCode,
  faPeopleArrows,
  faWifi,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCamera,
  faLaptopCode,
  faPeopleArrows,
  faWifi,
  faChalkboardTeacher
);

const laptop = icon({ prefix: 'fas', iconName: 'laptop-code' });
const people = icon({ prefix: 'fas', iconName: 'people-arrows' });
const wifi = icon({ prefix: 'fas', iconName: 'wifi' });
const teacher = icon({ prefix: 'fas', iconName: 'chalkboard-teacher' });

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
                    <FontAwesomeIcon icon={laptop} size="2x" color="orange" />
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
                    Our team of experts have a wide range of expertise and
                    experience building both web application and mobile
                    applications for on both iOS and Android platforms to
                    support both individual and business needs.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <FontAwesomeIcon icon={people} size="2x" color="orange" />
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
                    We offer consulting services in the following areas: IT
                    Service Management (ITSM) / Information Technology
                    Infrastructural Library (ITIL), Agile / Scrum Methodology,
                    Quality Assurance (QA), Security.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <FontAwesomeIcon icon={teacher} size="2x" color="orange" />
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
                    Our training offering cover a wide range of Information
                    Technology areas including: Application development, IT
                    Service Management, Security, Quality Assurance and
                    Networking to mention a few.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex py-5">
                <div className="d-80 flex-shrink-0 rounded-circle btn-icon bg-secondary">
                  <div className="d-40">
                    <FontAwesomeIcon icon={wifi} size="2x" color="orange" />
                  </div>
                </div>
                <div className="pt-2 pl-4">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold d-flex align-items-center mb-2 d-flex">
                    <div className="font-size-lg">Internet of Things (IoT)</div>
                    <div className="d-30 rounded-pill btn-icon bg-neutral-success font-size-xs text-success ml-2">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-sm"
                      />
                    </div>
                  </a>
                  <p className="mb-0 text-second opacity-7">
                    Our internal team is currently working on a huge IoT project
                    (Hardware and Software) targeted towards organizations with
                    inventory and measurement needs. We are also able to take on
                    projects in this space for our customers.
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
