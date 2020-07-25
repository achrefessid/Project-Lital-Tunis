import React, { Component } from "react";
import { connect } from "react-redux";
import { Button as Btn, Icon } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Galery.css";
import { getUsersList } from "../actions/productAction";

export class Galery extends Component {
  componentDidMount() { this.props.getUsersList() }
  render() {
    return (
      <div>
        <div className="top">
          {this.props.products_list.map((el) => {
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

                {/* <p>Createur : {el.createur} </p>
                <p>Année : {el.annee}</p>
                <p>Saison : {el.saison}</p>
                <p>Gamme : {el.gamme}</p>
                <p> Modele: {el.modele}</p>
                <p>Sex : {el.sex}</p>
                <p> mesure : {el.mesure}</p>
                <p>Quantité : {el.qte}</p> */}
                <Link to={"detail/" + el._id}>
                  <button color="dark" className="mr-2 styleb ui button">
                    <FontAwesomeIcon icon={faInfo} /> Détail
                  </button>
                </Link>
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
    products_list: state.users.getUsersList,
  };
};

//   const mapDispatchToProps = (dispatch) => ({
//     user: () => dispatch(user()),
//   });

export default connect(mapStateToProps, {
  getUsersList
})(Galery);
