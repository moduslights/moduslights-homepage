import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button, Alert } from 'reactstrap';

import { AvForm, AvField } from 'availity-reactstrap-validation';
import { isEmpty } from 'lodash';

export default function LivePreviewExample() {
  const [sendMessageError, setSendMessageError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event, errors, { name, email, message, phone }) => {
    console.log(name, email, message);
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      setSendMessageError(true);
    } else {
      // axios
      //   .post(`http://moduslights.com.ng/api/message`, {
      //     name,
      //     email,
      //     message,
      //     phone
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     console.log(res.data);
      //     setSuccessMessage(
      //       'We have receive your message and someone from our support team will respond to you within the next 24 hours. Thank you !'
      //     );
      //     setIsNew(true);
      //   });
      console.log('formRef', formRef);
      setIsNew(true);
    }
  };

  const hadnleValidSubmit = () => console.log('submitted')
  console.log('isNew', isNew);

  return (
    <>
      <Container>
        <Card className="rounded-sm shadow-none p-3 bg-white-50">
          <Card className="rounded-sm font-size-sm p-4">
            <Row>
              <Col lg="7" className="d-flex flex-column">
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="py-4">
                  <div className="text-center mb-3">
                    <h2>Get in Touch</h2>
                  </div>
                  <div>
                    <AvForm
                      model={
                        isNew
                          ? {
                              name: 'test',
                              email: 'b@gmail.com',
                              message: 'hello',
                              phone: '12345'
                            }
                          : {}
                      }
                      onSubmit={handleSubmit}>
                      onValidSubmit={hadnleValidSubmit}
                      <Row>
                        <Col md="12">
                          {sendMessageError ? (
                            <Alert color="danger">
                              <strong>Failed to send message!</strong> Please
                              check your entries and try again.
                            </Alert>
                          ) : null}
                          {successMessage.length > 1 ? (
                            <Alert color="success">
                              <strong>{successMessage}</strong>
                            </Alert>
                          ) : null}
                        </Col>
                        <Col md="12">
                          <AvField
                            name="name"
                            label="Name"
                            placeholder="Your Name"
                            required
                            errorMessage="Name cannot be empty!"
                          />
                          <AvField
                            name="email"
                            label="Email"
                            placeholder="Your Email"
                            required
                            errorMessage="Email cannot be empty!"
                          />
                          <AvField
                            name="phone"
                            label="Phone"
                            placeholder="Your Phone"
                          />
                          <AvField
                            name="message"
                            label="Message"
                            placeholder="Your Message"
                            validate={{
                              required: {
                                value: true,
                                errorMessage: 'Message is required.'
                              }
                            }}
                            type="textarea"
                            errorMessage="Message cannot be empty!"
                          />
                        </Col>
                      </Row>
                      <div className="mt-1">&nbsp;</div>
                      <Button
                        size="md"
                        block={false}
                        type="submit"
                        color="success"
                        className="font-weight-bold w-50 my-2">
                        Send Message
                      </Button>
                    </AvForm>
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
