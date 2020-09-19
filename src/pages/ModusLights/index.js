import React from 'react';

import Home from '../../components/Home';
import Development from '../../components/Development';
import OurValues from '../../components/OurValues';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import OurServices from '../../components/OurServices';
export default function Overview() {
  return (
    <>
      <Home />
      <OurServices />
      <Development />
      <OurValues />
      <ContactForm />
      <Footer />
    </>
  );
}
