import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container } from 'reactstrap';

import experienceImage from '../../../assets/images/imageonline_co_blackandwhiteimage.jpg'

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4">
      <img alt="..." className="img-fit-container" src={experienceImage} />
      </Card>
    </>
  );
}
