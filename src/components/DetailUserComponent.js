import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nom</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.nom}</td>
        </tr>
        <tr>
          <td width="200">Type</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.type}</td>
        </tr>
        <tr>
          <td width="200">Collection</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.collection}</td>
        </tr>
        <tr>
          <td width="200">Marque</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.marque}</td>
        </tr>
        <tr>
          <td width="200">Reférednce</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.reference}</td>
        </tr>
        <tr>
          <td width="200">Phase</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.phase}</td>
        </tr>
        <tr>
          <td width="200">Mesure</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.mesure}</td>
        </tr>
        <tr>
          <td width="200">Couleur</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.couleur}</td>
        </tr>
        <tr>
          <td width="200">Quantité</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.quantite}</td>
        </tr>
        <tr>
          <td width="200">Commentaire</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.commentaire}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
