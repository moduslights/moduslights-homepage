import React from 'react';

import { Card } from 'reactstrap';

import experienceImage from '../../../assets/images/imageonline_co_blackandwhiteimage.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4">
        <img alt="..." className="" src={experienceImage} />
      </Card>
    </>
  );
}
