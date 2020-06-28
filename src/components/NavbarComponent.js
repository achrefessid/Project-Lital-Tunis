import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";
import { NavLink as soltanLink } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutUser } from '../actions/currentUserAction'


const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand><img src="https://i1.wp.com/www.recruter.tn/wp-content/uploads/2018/03/logo_lital_0.png?fit=328%2C111" width="120" /> </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <NavLink><soltanLink to="/">Home</soltanLink></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><soltanLink to="/user">Gestion d'utilisateur</soltanLink></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><soltanLink to="/product">Produits</soltanLink></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><soltanLink to="/historic">Historique</soltanLink></NavLink>
              </NavItem>

            </Nav>
            <NavLink><soltanLink to="/dec"><button onClick={() => { props.logoutUser() }}>Déconnecter</button></soltanLink></NavLink>

          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default connect(
  (state => {
    return {
      user: state.currentUser
    }
  }), { logoutUser })
  (NavbarComponent);