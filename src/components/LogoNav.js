import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import campfire from '../assets/campfire.png';
import '../css/LogoNav.css';
class LogoNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="navbar-dark" light expand="md">
      <NavbarBrand href="/">
      <div className="App-brand">
        <img src={campfire} width={80} height={80} className="App-campfire" alt="campfire" />
      </div>
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/register">Регистрация</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/auth">Вход</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    );
  }
}

export default LogoNav;
