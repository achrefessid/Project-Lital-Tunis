//container ili ta7it navbar
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    titlehistorique: state.users.titlehistorique
  }
}

const JumbotronHistoric = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.titlehistorique}</h1>

          <hr className="my-2" />

          <p>
            Cette page permet à l'administrateur de visualiser le mouvement du stock par date et par opéarteur.
          </p>

          <p className="lead">
          <Button color="dark"><FontAwesomeIcon icon={faInfo}/> Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronHistoric);

