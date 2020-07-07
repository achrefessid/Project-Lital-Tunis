import React, { Component } from "react";
import TableHistoric from "../components/Tablehistoric";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/productAction'
import JumbotronHistoric from "../components/Jumbotron/JumbotronHistoric";

class HistoricContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <JumbotronHistoric />   
        <TableHistoric />
      </div>
    );
  }
}

export default connect()(HistoricContainer);