import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersFromApi } from "../../actions/userActions"
import './SignUp.css';

export class SignUp extends Component {
  verif() {
    console.log(this.state)
    const x = this.props.users.filter((el) => el.userName === this.state.userName && el.passWord=== this.state.passWord);

    if (x.length === 0) 
    {alert("Données invalides")}
    else
    {window.location.pathname = "/user";}
  }
//{window.location.pathname = "/home";}

  componentDidMount() {
    this.props.getAlluser();
    console.log("eeddd", this.props.users);
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

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  getAlluser: () => dispatch(getUsersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
