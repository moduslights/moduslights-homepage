import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Collapse,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../../assets/images/react.svg';
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
            to="/Overview"
            title="Bamburgh React Admin Dashboard with Reactstrap PRO"
            className="app-nav-logo app-nav-logo--light">
            <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-nav-logo--text">

              <b style={{textTransform: 'uppercase'}}>MODUSLIGHTS</b>
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
            <li>
              <a
                className="rounded text-white font-weight-bold"
                href="/#service"
                onClick={(e) => e.preventDefault()}>
                Service
              </a>
            </li>
            <li>
              <a
                className="rounded text-white font-weight-bold"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button
              tag="a"
              href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro"
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-lg text-nowrap font-size-sm text-uppercase shadow-second-sm"
              color="success">
              Hire Us
            </Button>
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
