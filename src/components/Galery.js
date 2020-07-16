import React, { Component } from "react";
import { connect } from "react-redux";
import "./Galery.css";

export class Galery extends Component {
  render() {
    return (
      <div className="cwarta">
        <div className="top">
          {this.props.getUsersList.map((el) => {
            return (
              <div className="carte" key={el.id}>
                <h2>{el.name}</h2>
                <img
                  className="photo"
                  src={"http://localhost:3001/" + el.photo}
                  alt="Mon Produit"
                />
                <p>
                  {el.createur}-{el.saison}-{el.annee}
                </p>
                <p>
                  {el.gamme}-{el.modele}
                </p>
                <p>
                  {el.sex}-{el.mesure}-{el.qte}
                </p>
                <p>{el.annee}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
  };
};

//   const mapDispatchToProps = (dispatch) => ({
//     user: () => dispatch(user()),
//   });

export default connect(mapStateToProps, null)(Galery);
