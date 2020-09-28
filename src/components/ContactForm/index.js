import React, { useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button, Alert } from 'reactstrap';

import { isEmpty } from 'lodash';

export default function LivePreviewExample() {
  const [sendMessageError, setSendMessageError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, email, message, phone);
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      setSendMessageError(true);
    } else {
      axios
        .post(`http://moduslights.com.ng/api/message`, {
          name,
          email,
          message,
          phone
        })
        .then((res) => {
          setSuccessMessage(
            'We have receive your message and someone from our support team will respond to you within the next 24 hours. Thank you !'
          );
        });
      setName('');
      setPhone('');
      setMessage('');
      setEmail('');
      setSendMessageError(false);
    }
  };



  return (
    <>
      <Container>
        <Card className="rounded-sm shadow-none p-3 bg-white-50">
          <Card className="rounded-sm font-size-sm p-4">
            <Row>
              <Col md="6" className="d-flex flex-column">
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="py-4">
                  <div className="text-center mb-3">
                    <h2>Get in Touch</h2>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit}>
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
                          <div className="form-group">
                            <input
                              name="name"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your Name"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              name="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Your Email"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              name="phone"
                              className="form-control"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Your Phone"
                            />
                          </div>
                          <textarea
                            name="message"
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            required
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
                    </form>
                  </div>
                </div>
              </Col>
              <Col
                md="6"
                className="d-flex align-items-center justify-content-center flex-column">
                <div className="p-3">
                  <div className="d-block d-xl-flex">
                    <div className="mt-0 mt-xl-1">
                      <FontAwesomeIcon
                        icon={['far', 'map']}
                        className="font-size-lg text-first"
                      />
                    </div>
                    <div className="pl-0 pl-xl-3">
                      <div className="text-black font-weight-bold font-size-lg mb-1">
                        Address
                      </div>
                      <p className="mb-0 text-black-50">
                        2401 Fountain View Dr. Ste 461 #2023
                        Houston TX 77057
                      </p>
                      <p className="mb-0 text-black-50">
                        <span className="text-black font-weight-bold font-size-lg mb-1">Email: </span>
                        support@moduslights.com
                      </p>
                      <p className="mb-0 text-black-50">
                        <span className="text-black font-weight-bold font-size-lg mb-1">Phone: </span>
                        +1-617-785-5095
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
