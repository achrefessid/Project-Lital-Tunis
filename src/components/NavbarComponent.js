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
                <NavLink href="/signup">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/user">Gestion d'utilisateur</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/product">Produits</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/historic">Historique</NavLink>
              </NavItem>
             
            </Nav>
            <NavLink href="/dec">Déconnexion</NavLink>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
