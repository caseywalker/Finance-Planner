import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/income">Income</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/expenses">Expenses</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/savings">Savings</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/steps">Steps</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/tracker">Tracker</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/simulator">Simulator</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Finance Planner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
          <Link className="nav-link" to="/">Home</Link>
        </NavItem>
        { user && authenticated() }
        {
            user !== null
            && <NavItem>
              {
                user
                  ? <Button color='danger' onClick={signOutUser}> Sign Out </Button>
                  : <Button color='info' onClick={signInUser}> Sign In </Button>
              }
            </NavItem>
          }
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
