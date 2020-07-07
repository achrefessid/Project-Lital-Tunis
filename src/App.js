import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
//import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ProductContainer from "./containers/ProductContainer";
import HistoricContainer from "./containers/HistoricContainer";
import CreateProductContainer from "./containers/CreateProductContainer";
import EditProductContainer from "./containers/EditProductContainer";
import DetailProductContainer from "./containers/DetailProductContainer";
import UserContainer from "./containers/UserContainer";
import SignUp from "./components/SignUp/SignUp";
import SingIn from "./components/ManagingUser/addUser";
import Dex from "./components/déconnection";
import { connect } from 'react-redux'



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavbarComponent />

          {(this.props.user) ?
            (this.props.user === "none") ?

              <Switch>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/dec" component={Dex} />
                <Redirect to="/" />
              </Switch>


              : (this.props.user.userPost=== "Administrateur") ?


                <Switch>
                  <Route exact path="/signin" component={SingIn} />
                  <Route exact path="/" component={UserContainer} />
                  <Route exact path="/user" component={UserContainer} />
                  <Route exact path="/product" component={ProductContainer} />
                  <Route exact path="/historic" component={HistoricContainer} />
                  <Route exact path="/dec" component={Dex} />

                  <Route exact path="/create" component={CreateProductContainer} />
                  <Route exact path="/detail/:id" component={DetailProductContainer} />
                  <Route exact path="/edit/:id" component={EditProductContainer} />
                  <Redirect to="/" />
                </Switch>

                : (this.props.user.userPost === "Opérateur") ?
                  <Switch>
                    <Route exact path="/" component={ProductContainer} />
                    <Route exact path="/product" component={ProductContainer} />
                    <Route exact path="/historic" component={HistoricContainer} />
                    <Route exact path="/dec" component={Dex} />

                    <Route exact path="/create" component={CreateProductContainer} />
                    <Route exact path="/detail/:id" component={DetailProductContainer} />
                    <Route exact path="/edit/:id" component={EditProductContainer} />
                    <Redirect to="/" />
                  </Switch>
                  : <div>euhhh1 !{console.log("user",this.props.user)
                  }</div>
            : <div>euhhh2 !</div>}
        </Router>
      </div>
    );
  }
}

export default connect(
  (state => {
    return {
      user: state.currentUser
    }
  }), null)
  (App);