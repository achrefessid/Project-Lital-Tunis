//container ili ta7it navbar
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //mta3 font awesome
import { faInfo } from '@fortawesome/free-solid-svg-icons'//mta3 font awesome
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.user}</h1>

          <hr className="my-2" />

          <p>
            Cette page permet à l'administrateur d'ajouter un utilisateur, de modifier ses informations ou de le supprimer.
          </p>

          <p className="lead">
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);