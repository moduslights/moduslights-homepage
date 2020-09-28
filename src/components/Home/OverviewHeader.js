import React, { useState } from 'react';
import { Link } from 'react-scroll';

import clsx from 'clsx';

import { Button } from 'reactstrap';

import logoWithoutNameTransparentBg from '../../assets/images/ModusLightsLogoOnlyTransparentBg.jpg';

import { NavLink } from 'react-router-dom';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <NavLink
            to="/"
            title="Moduslights"
            className="app-nav-logo app-nav-logo--light">
            <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                style={{ width: '25' }}
                alt="Moduslights Logo"
                src={logoWithoutNameTransparentBg}
              />
            </div>
            <div className="app-nav-logo--text">
              <b style={{ textTransform: 'uppercase' }}>MODUSLIGHTS</b>
            </div>
          </NavLink>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex nav nav-neutral-first justify-content-center">
            <li>
              <a
                className="rounded text-white font-weight-bold"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>
            <li style={{ cursor: 'pointer' }}>
              <Link
                className="rounded text-white font-weight-bold"
                to="section2"
                activeClass="active"
                smooth={true}>
                Service
              </Link>
            </li>

            <li style={{ cursor: 'pointer' }}>
              <Link
                className="rounded text-white font-weight-bold"
                to="section4"
                activeClass="active"
                smooth={true}>
                Our Values
              </Link>
            </li>

            <li style={{ cursor: 'pointer' }}>
              <Link
                className="rounded text-white font-weight-bold"
                to="section5"
                activeClass="active"
                smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Link
              className="rounded text-white font-weight-bold"
              to="section5"
              activeClass="active"
              smooth={true}>
              <Button
                tag="Link"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-lg text-nowrap font-size-sm text-uppercase shadow-second-sm"
                color="success">
                Hire Us
              </Button>
            </Link>
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
