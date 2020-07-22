import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  deleteUser,
  postUserCreate,
  putUserUpdate,
} from "../actions/productAction";

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.postUserCreate(data, this.props.currentUser);
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Echec!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "Produit ajouté!",
          "Année : " +
            this.props.getResponDataUser.annee +
            " , Saison : " +
            this.props.getResponDataUser.saison,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Ajouter Produit</h1>

        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser,
})(CreateUserContainer);
