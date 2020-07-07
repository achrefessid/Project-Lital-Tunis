//container ili ta7it navbar
import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
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
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronHistoric);

