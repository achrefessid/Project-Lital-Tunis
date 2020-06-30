import React, { Component } from "react";
import TableProduct from "../components/TableProduct";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/productAction'
import JumbotronProduct from "../components/Jumbotron/JumbotronProduct";

class ProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <JumbotronProduct />   
        <TableProduct />
      </div>
    );
  }
}

export default connect()(ProductContainer);
