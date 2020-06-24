//container ili ta7it navbar
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //mta3 font awesome
import { faInfo } from '@fortawesome/free-solid-svg-icons'//mta3 font awesome
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>

          <hr className="my-2" />

          <p>
            Cette page permet à l'utilisateur de chercher un produit selon plusieurs critéres et modifier / supprimer un produit.
          </p>

          <p className="lead">
          <Button color="dark"><FontAwesomeIcon icon={faInfo}/> Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
