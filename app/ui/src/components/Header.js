import React from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import '../styles/Header.css';
import logo from '../images/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} alt=""/>
          <h3 id = "appName"> UTMap </h3>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight><LinkContainer to="/" exact={true}>
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/account">
        <NavItem eventKey={3}>Account</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={3}>About</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
