import React, { Component } from "react";
import { connect } from "react-redux";
import { Button as Btn, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Galery.css";

export class Galery extends Component {
  render() {
    return (
      <div>
        <NavLink to="/product" className="cwarta top">
          <Btn className="styleb " icon labelPosition="left">
            <Icon name="list" />
            Liste des produits
          </Btn>
        </NavLink>
        <div className="top">
          {this.props.getUsersList.map((el) => {
            return (
              <div className="carte" key={el.id}>
                <a href={"http://localhost:3001/" + el.photo} target="_blank">
                  <img
                    className="photo"
                    src={"http://localhost:3001/" + el.photo}
                    alt="Mon Produit"
                  />
                </a>
                <h2>{el.name}</h2>

                <p>
                  createur : {el.createur}- saison : {el.saison}
                </p>
                <p>
                  gamme : {el.gamme}- modele: {el.modele}
                </p>
                <p>
                  sex : {el.sex}- mesure : {el.mesure}
                </p>
                <p>quantité : {el.qte}</p>
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
