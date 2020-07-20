import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/productAction";
import DetailUserComponent from "../components/DetailUserComponent";
import "./edit.css";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Détail de Produit</h1>
        <DetailUserComponent />
        <div className="enreg">
          <div
            className="ui meduim basic icon buttons"
            onClick={() => window.print()}
          >
            <button className="ui button ">
              <i className="save icon"></i> Enregistez
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
