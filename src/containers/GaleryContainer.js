import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/productAction'
import JumbotronProduct from "../components/Jumbotron/JumbotronProduct";
import Galery from "../components/Galery";

class GaleryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <JumbotronProduct />   
        <Galery />
      </div>
    );
  }
}

export default connect()(GaleryContainer);
