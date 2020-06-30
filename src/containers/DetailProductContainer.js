import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponentProduct from "../components/BackComponentProduct";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/productAction";
import DetailProductComponent from "../components/DetailProductComponent";

class DetailProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponentProduct />
        <h1>Détail de Produit</h1>
        <DetailProductComponent />
      </Container>
    );
  }
}

export default connect()(DetailProductContainer);
