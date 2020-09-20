import React from 'react';

import Home from '../../components/Home';
import Development from '../../components/Development';
import OurValues from '../../components/OurValues';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import OurServices from '../../components/OurServices';
import OurExperiences from '../../components/OurExperience';
import Section from 'components/Home/Section';
export default function Overview() {
  return (
    <>
        <Section
          component = {Home}
          id="section1"
        />
        <Section
          component = {OurServices}
          id="section2"
        />
        <Section
          component = {Development}
          id="section3"
        />
        <Section
          component = {OurValues}
          id="section4"
        />
        <Section
        component={OurExperiences}
        id="section6"
        />
        <Section
          component = {ContactForm}
          id="section5"
        />
      <Footer />
    </>
  );
}
