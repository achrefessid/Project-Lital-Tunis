import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import ProductContainer from "./containers/ProductContainer";
import HistoricContainer from "./containers/HistoricContainer";
import CreateProductContainer from "./containers/CreateProductContainer";
import EditProductContainer from "./containers/EditProductContainer";
import DetailProductContainer from "./containers/DetailProductContainer";
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

          <Route exact path="/signup"  component={SignUp} /> 
          <Route exact path="/signin"  component={SingIn} /> 
          <Route exact path="/product"  component={ProductContainer} />
          <Route exact path="/historic"  component={HistoricContainer} /> 
          <Route exact path="/user"  component={UserContainer} /> 

          <Route exact path="/dec"  component={Dex} /> 


          <Route exact path="/create"  component={CreateProductContainer} />
          <Route exact path="/detail/:id"  component={DetailProductContainer} />
          <Route exact path="/edit/:id"  component={EditProductContainer} /> 
        </BrowserRouter>
      </div>
    );
  }
}
