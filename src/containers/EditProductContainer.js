import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponentProduct from "../components/BackComponentProduct";
import { connect } from "react-redux";
import FormComponentProduct from "../components/FormComponentProduct";
import swal from "sweetalert";
import {
  deleteUser,
  postUserCreate,
  getUserDetail,
  putUserUpdate,
} from "../actions/productAction";

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditProductContainer extends Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.id);
  }

  handleSubmit(data) {
    this.props.putUserUpdate(
      data,
      this.props.match.params.id,
      this.props.currentUser
    );
    console.log("data", data, "id", this.props.match.params.id);
    console.log("currentUser", this.props.currentUser);
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "Product Updated!",
          "Année : " +
            this.props.getResponDataUser.annee +
            " , Saisson : " +
            this.props.getResponDataUser.saison,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponentProduct />
        <h1>Modifier le produit</h1>
        <FormComponentProduct onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser,
  getUserDetail,
})(EditProductContainer);
