import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/productAction'
import JumbotronUser from "../components/Jumbotron/JumbotronUser";
import VueUser from "../components/ManagingUser/vueUser";

class UserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <JumbotronUser />   
        <VueUser />   

      </div>
    );
  }
}

export default connect()(UserContainer);