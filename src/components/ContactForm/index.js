import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Container>
        <Card className="rounded-sm shadow-none p-3 bg-white-50">
          <Card className="rounded-sm font-size-sm p-4">
            <Row>
              <Col
                lg="7"
                className="d-flex flex-column">
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="py-4">
                  <div className="text-center mb-3">
                    <h2>Get in Touch</h2>
                  </div>

                  <div>
                    <div className="form-group mb-3">
                      <Input placeholder="Name" type="name" />
                    </div>
                    <FormGroup>
                      <Input placeholder="Email" type="email" />
                    </FormGroup>
                    <div className="text-center py-4">
                      <Button
                        color="second"
                        className="font-weight-bold w-50 my-2">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg="5"
                className="d-flex align-items-center justify-content-center flex-column">
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['far', 'heart']}
                        className="font-size-lg text-first"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="text-black font-weight-bold font-size-lg mb-1">
                        Widgets
                      </div>
                      <p className="mb-0 text-black-50">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="font-size-lg text-first"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="text-black font-weight-bold font-size-lg mb-1">
                        Components
                      </div>
                      <p className="mb-0 text-black-50">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-lg text-first"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="text-black font-weight-bold font-size-lg mb-1">
                        Elements
                      </div>
                      <p className="mb-0 text-black-50">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </Container>
    </>
  );
}
