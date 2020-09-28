import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import logoWithoutNameTransparentBg from '../../assets/images/ModusLightsLogoOnlyTransparentBg.jpg';
import { Link } from 'react-scroll';
import Lifecycle from "react-router/modules/Lifecycle";

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-second font-size-sm py-5">
        <div className="py-3">
          <Link
            style={{ cursor: 'pointer' }}
            smooth={true}
            to="section1"
            title="Moduslights"
            className="d-70 d-block mx-auto bg-white rounded-circle">
            <img
              alt="Moduslight Logo"
              className="img-fluid p-2"
              src={logoWithoutNameTransparentBg}
            />
          </Link>
        </div>
        <Container className="pt-5">
          <Row className="pb-3">
            <Col md="6" xl="3">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Services
                </h6>
                <Nav className="nav-transparent flex-column">
                  <NavItem style={{ cursor: 'pointer' }}>
                    <Link
                      to="section2"
                      activeClass="active"
                      smooth={true}
                      className="px-0 py-1 text-white-50">
                      Services
                    </Link>
                  </NavItem>
                  <NavItem style={{ cursor: 'pointer' }}>
                    <Link
                      to="section2"
                      smooth={true}
                      className="px-0 py-1 text-white-50">
                      About Us
                    </Link>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Support
                </h6>
                <Nav className="nav-transparent flex-column">
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 text-white-50">
                      support@moduslights.com
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 text-white-50">
                      +1-617-785-5095
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Internal App Projects
                </h6>
                <Nav className="nav-transparent flex-column">
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 text-white-50">
                      SmartQ'
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 text-white-50">
                      DeepX
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 py-1 text-white-50">
                      PingPay
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="my-4 my-xl-0">
                <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                  Social Connections
                </h6>
                <p className="text-white-50">
                  Stay up to date with our latest News and products releases!
                </p>
                <Nav className="nav-transparent justify-content-start">
                  {/*<NavItem>*/}
                  {/*  <NavLinkStrap*/}
                  {/*    className="px-0 mr-3 text-white-50"*/}
                  {/*    href="#/"*/}
                  {/*    onClick={(e) => e.preventDefault()}>*/}
                  {/*    <FontAwesomeIcon*/}
                  {/*      icon={['fab', 'facebook']}*/}
                  {/*      className="font-size-lg"*/}
                  {/*    />*/}
                  {/*  </NavLinkStrap>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem>*/}
                  {/*  <NavLinkStrap*/}
                  {/*    className="px-0 mr-3 text-white-50"*/}
                  {/*    href="#/"*/}
                  {/*    onClick={(e) => e.preventDefault()}>*/}
                  {/*    <FontAwesomeIcon*/}
                  {/*      icon={['fab', 'twitter']}*/}
                  {/*      className="font-size-lg"*/}
                  {/*    />*/}
                  {/*  </NavLinkStrap>*/}
                  {/*</NavItem>*/}
                  <NavItem>
                    <NavLinkStrap
                      className="px-0 mr-3 text-white-50"
                      href="https://www.linkedin.com/company/moduslights/?viewAsMember=true"
                      target="_blank">
                      <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        className="font-size-lg"
                      />
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      className="px-0 mr-3 text-white-50"
                      href="https://www.instagram.com/moduslights/"
                      target="_blank">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>
          <div className="divider mt-4 bg-white opacity-2" />
          <div className="divider mb-4 bg-white opacity-2" />
          <div className="py-3 d-block d-lg-flex align-items-center justify-content-center">
            <div className="text-center d-block mb-3 mb-md-0 text-white">
              Copyright &copy; 2020 - Moduslights
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
