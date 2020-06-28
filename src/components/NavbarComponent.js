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
          <NavbarBrand><NavLink tag={soltanLink} exact  to="/"><img src="https://i1.wp.com/www.recruter.tn/wp-content/uploads/2018/03/logo_lital_0.png?fit=328%2C111" width="120" /> </NavLink></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <NavLink tag={soltanLink} exact  to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={soltanLink} to="/user">Gestion d'utilisateur</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={soltanLink} to="/product">Produits</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={soltanLink} to="/historic">Historique</NavLink>
              </NavItem>

            </Nav>
            <NavLink tag={soltanLink} to="/dec"><button onClick={() => { props.logoutUser() }}>Déconnecter</button></NavLink>

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