import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Photo</td>
          <td width="10">:</td>
          <td>
            <a
              target="_blank"
              href={"http://localhost:3001/" + props.getUserDetail.photo}
            >
              <img
                style={{ width: "50%" }}
                src={"http://localhost:3001/" + props.getUserDetail.photo}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getUserDetail._id}</td>
        </tr>
        <tr>
          <td width="200">Anneé</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.annee}</td>
        </tr>
        <tr>
          <td width="200">Saison</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.saison}</td>
        </tr>
        <tr>
          <td width="200">Createur</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.createur}</td>
        </tr>
        <tr>
          <td width="200">Gamme</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.gamme}</td>
        </tr>
        <tr>
          <td width="200">Sex</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.sex}</td>
        </tr>
        <tr>
          <td width="200">Modéle</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.modele}</td>
        </tr>
        <tr>
          <td width="200">Name</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Mesure</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.mesure}</td>
        </tr>
        <tr>
          <td width="200">Quantité</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.qte}</td>
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

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(DetailUserComponent);
