import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersFromApi } from "../../actions/userActions"
import { loginUser } from "../../actions/currentUserAction"
import './SignUp.css';

class SignUp extends Component {
  verif() {
    const x = this.props.users.filter((el) => ((el.userName === this.state.userName) && (el.passWord === this.state.passWord)));

    if (x.length === 0) { alert("Données invalides") }
    else {
      this.props.loginUser(x[0])
    }
  }
  //{window.location.pathname = "/home";}

  componentDidMount() {
    this.props.getAlluser();

  }

  render() {
    return (
      <div>
        <div className="Sin">
          <div className="Siin">
            <h1>CONNEXION</h1>
            <div>
              <span>Nom d'utilisateur</span>
              <input
                type="text"
                placeholder="Entrer le nom d'utilisateur"
                required
                onChange={(e) => this.setState({ userName: e.target.value })}
              />
              <span>Mot de passe</span>
              <input type="password" placeholder="Entrer le mot de passe"
                onChange={(e) => this.setState({ passWord: e.target.value })} />
              <button onClick={() => this.verif()}> Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(  (state => {
  return {
    users: state.userReducer
  }
}),
 {
  getAlluser : getUsersFromApi,
  loginUser
})(SignUp);
