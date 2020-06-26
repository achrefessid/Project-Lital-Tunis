import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
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
        <TableComponent />
      </div>
    );
  }
}

export default connect()(ProductContainer);
