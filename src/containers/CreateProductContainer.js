import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponentProduct from "../components/BackComponentProduct";
import FormComponentProduct from "../components/FormComponentProduct";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser,  postUserCreate, putUserUpdate} from "../actions/productAction";


const mapStateToProps = (state) => {
  return {
    currentUser : state.currentUser,
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.postUserCreate(data,this.props.currentUser);
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
        <BackComponentProduct />
        <h1>Ajouter Produits</h1>
        <FormComponentProduct onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  postUserCreate,
  putUserUpdate,
  deleteUser
})(CreateProductContainer); 

