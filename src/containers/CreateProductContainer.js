import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponentProduct from "../components/BackComponentProduct";
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

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.postUserCreate(data);
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser)
      {
        swal(
            "Échoué!",
            this.props.errorResponDataUser,
            "Erreur"
          );
      }else {
        swal(
            "Produit créé!",
            "Année : " +
              this.props.getResponDataUser.annee +
              " , Saison : " +
              this.props.getResponDataUser.saison,
            "Succès"
          );
      }
    }
    return (
      <Container>
        <BackComponentProduct />
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
})(CreateProductContainer); 

