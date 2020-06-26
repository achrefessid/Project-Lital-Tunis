import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser,  postUserCreate, putUserUpdate} from "../actions/productAction";


const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.postUserCreate(data);
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser)
      {
        swal(
            "Failed!",
            this.props.errorResponDataUser,
            "error"
          );
      }else {
        swal(
            "User Created!",
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
        <h1>Ajouter Produits</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser
})(CreateUserContainer); 

