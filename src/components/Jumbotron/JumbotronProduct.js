//container ili ta7it navbar
import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { connect } from 'react-redux'



const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>

          <hr className="my-2" />

          <p>
            Cette page permet à l'utilisateur de chercher un produit selon plusieurs critéres et de faire des modifications ou suppressions sur les produits.
          </p>

          <p className="lead">
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

export default connect(mapStateToProps, null)(JumbotronComponent);
