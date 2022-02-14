import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <div className="header">
        <Navbar
          className="navbar"
          color="dark"
          dark
          expand="md"
        >
          <NavbarBrand href="/">
            Togetherments
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/apartmentindex/">
                  Apartments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/apartmentnew"
                >
                  show off
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Crudentials
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="signin">
                    <NavLink href={sign_in_route}>
                      Sign In
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem className="signout">
                    <NavLink href={sign_out_route}>
                      Sign Out
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="signup">
                    <NavLink href={new_user_route}>
                      Sign Up
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}