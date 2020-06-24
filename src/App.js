import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
/*  state = {
    title: "Wahidev Academy",
    users: [
      {
        id: 1,
        nama: "afif",
        alamat: "pekalongan",
        umur: 24,
        nohp: "000000000",
      },
      {
        id: 1,
        nama: "afif",
        alamat: "pekalongan",
        umur: 24,
        nohp: "000000000",
      }
    ]
  }
*/
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />   

        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
