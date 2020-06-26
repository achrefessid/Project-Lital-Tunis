import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
//import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import ProductContainer from "./containers/ProductContainer";
import HistoricContainer from "./containers/HistoricContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import UserContainer from "./containers/UserContainer";
import SignUp from "./components/SignUp/SignUp";
import SingIn from "./components/ManagingUser/addUser";
import Dex from "./components/déconnection"



export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>

          <Route exact path="/product"  component={ProductContainer} />
          <Route exact path="/historic"  component={HistoricContainer} /> 
          <Route exact path="/user"  component={UserContainer} /> 
          <Route exact path="/"  component={SignUp} /> 
          <Route exact path="/signin"  component={SingIn} /> 
          <Route exact path="/dec"  component={Dex} /> 


          <Route exact path="/create"  component={CreateUserContainer} />
          <Route exact path="/detail/:id"  component={DetailUserContainer} />
          <Route exact path="/edit/:id"  component={EditUserContainer} /> 
        </BrowserRouter>
      </div>
    );
  }
}
