import { ADD_USER, GET_USER, EDIT_USER, DELETE_USER } from "./types";
import Axios from "axios";
import { json } from "body-parser";

let token = localStorage.getItem('token');
console.log("tooooooooken : ", token);
Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

// { header: { "x-auth-token": localStorage.getItem('token') } }

// Axios.interceptors.request.use(function(config) {
//   const token = localStorage.getItem('token');

//   if ( token != null ) {
//     config.headers.Authorization = token;
//   }

//   return config;
// }, function(err) {
//   return Promise.reject(err);
// });
/* get user */

export const getAllUsers = (payload) => ({
  type: GET_USER,
  payload,
});

export function getUsersFromApi() {
  // const toktok = async () => {
  let tok = localStorage.getItem('token');
  console.log("users list action called: ", tok);
  // }
  return (dispatch) =>
    Axios.get("http://localhost:3001/users", {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        console.log("users list action : ", res.data);
        dispatch(getAllUsers(res.data));
      });
}

/* add  user */

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function postUser(el) {
  console.log("add user");

  return (dispatch) =>
    Axios.post(`http://localhost:3001/users`, {
      id: el.id,
      userName: el.userName,
      userMail: el.userMail,
      passWord: el.passWord,
      firstName: el.firstName,
      lastName: el.lastName,
      userPhone: el.userPhone,
      userPost: el.userPost,
    })
      .then((res) => dispatch(getUsersFromApi()))
      .catch((err) => console.log(err));
}

/* delete user */

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export function deleteUsersFromApi(id) {
  return (dispatch) =>
    Axios.delete("http://localhost:3001/users/" + id).then((res) =>
      dispatch(getUsersFromApi())
    );
}

/* edite user */

export const editeUser = (payload) => ({
  type: EDIT_USER,
  payload,
});

export function editeUserFromApi(el) {
  console.log("user edited", el._id);
  return (dispatch) =>
    Axios.put("http://localhost:3001/users/" + el._id, el).then((res) =>
      dispatch(getUsersFromApi())
    );
}
