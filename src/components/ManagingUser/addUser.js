import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../actions/userActions";
import "./managingUser.css";
import BackComponentUser from "./BackComponentUser"

const SingIn = ({ addPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passWord, setUserPass] = useState("");
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPost, setUserPost] = useState("Opérateur");

  return (
    <>
    <BackComponentUser />
    <div className="Sin">
      <div className="Siin">
        <h1>Ajouter un utilisateur</h1>
        <form>
          <span>Prénom</span>
          <input
            type="text"
            placeholder="Entrer le prénom d'utilisateur"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span>Nom</span>
          <input
            type="text"
            placeholder="Entrer le prénom d'utilisateur"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span>Mot de passe</span>
          <input
            type="password"
            placeholder="Entrer le mot de passe"
            minLength="8"
            required
            value={passWord}
            onChange={(e) => setUserPass(e.target.value)}
          />
          <span>Pseudo</span>
          <input
            type="text"
            placeholder="Entrer le pseudo d'utilisateur"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>Mail</span>
          <input
            type="text"
            placeholder="Entrer le mail "
            required
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
          <span>Numéro de téléphone</span>
          <input
            type="phone"
            placeholder="Entrer le numero de téléphone"
            minLength="8"
            required
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <span>Type d'utilisateur</span>
          
          <input
            type="text"
            placeholder="Role d'utilisateur"
            required
            value={userPost}
            onChange={(e) => setUserPost("Administrateur")}
          />
          
          <button
            onClick={() =>
              addPerson({
                userName: userName,
                userMail: userMail,
                passWord: passWord,
                firstName: firstName,
                lastName: lastName,
                userPhone: userPhone,
                userPost: userPost,
              })
            }
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (user) => dispatch(postUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
