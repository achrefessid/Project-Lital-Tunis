import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
//import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route, Redirect,Switch } from "react-router-dom";
import ProductContainer from "./containers/ProductContainer";
import HistoricContainer from "./containers/HistoricContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import UserContainer from "./containers/UserContainer";
import SignUp from "./components/SignUp/SignUp";
import SingIn from "./components/ManagingUser/addUser";
import Dex from "./components/déconnection";
import { connect } from 'react-redux'



class App extends Component {
  componentDidMount() {
    console.log("this.props.user", this.props.user)
  };
  render() {
    return (
      <div>
        <NavbarComponent />

        {(this.props.user) ?
          (this.props.user === "none") ?
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={SignUp} />
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>

            : (this.props.user === "Administrateur") ?

              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={UserContainer} />
                  <Route exact path="/product" component={ProductContainer} />
                  <Route exact path="/historic" component={HistoricContainer} />
                  <Route exact path="/user" component={UserContainer} />
                  <Route exact path="/signin" component={SingIn} />
                  <Route exact path="/dec" component={Dex} />

                  <Route exact path="/create" component={CreateUserContainer} />
                  <Route exact path="/detail/:id" component={DetailUserContainer} />
                  <Route exact path="/edit/:id" component={EditUserContainer} />
                  <Redirect to="/" />
                </Switch>
              </BrowserRouter>
              : (this.props.user === "Opérateur") ?
                <BrowserRouter>
                  <Route exact path="/" component={ProductContainer} />
                  <Route exact path="/product" component={ProductContainer} />
                  <Route exact path="/historic" component={HistoricContainer} />
                  <Route exact path="/user" component={UserContainer} />
                  <Route exact path="/signin" component={SingIn} />
                  <Route exact path="/dec" component={Dex} />

                  <Route exact path="/create" component={CreateUserContainer} />
                  <Route exact path="/detail/:id" component={DetailUserContainer} />
                  <Route exact path="/edit/:id" component={EditUserContainer} />
                  <Redirect to="/" />
                </BrowserRouter>
                : <div>euhhh1 !</div>
          : <div>euhhh2 !</div>}
      </div>
    );
  }
}

export default connect(
  (state => {
    return {
      user: state.currentUser
    }
  }),null)
  (App);