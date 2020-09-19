import React from 'react';

import Home from '../../components/Overview/Home';
import Development from '../../components/Overview/Development';
import OurValues from '../../components/Overview/OurValues';
import ContactForm from '../../components/Overview/ContactForm';
import Footer from '../../components/Overview/Footer';
import OurServices from '../../components/Overview/OurServices';
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
