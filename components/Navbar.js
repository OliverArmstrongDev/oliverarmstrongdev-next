import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
      <NavbarBrand href="/">
      <img
        alt="logo"
        src="/images/logo.png"
        style={{
          height: 60,
          width: 60
        }}
      />
    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://oliverarmstrongdev.com/#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://oliverarmstrongdev.com/#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:connect@oliverarmstrongdev.com">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  

}
export default Example;