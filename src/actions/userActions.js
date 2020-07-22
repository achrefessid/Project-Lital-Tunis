import { ADD_USER, GET_USER, EDIT_USER, DELETE_USER } from "./types";
import Axios from "axios";

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
      .then((res) => dispatch(addUser(el)))
      .catch((err) => console.log(err));
}

/* get user */

export const getAllUsers = (payload) => ({
  type: GET_USER,
  payload,
});

export function getUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3001/users").then((res) => {
      dispatch(getAllUsers(res.data));
    });
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
  console.log("user edited", el);
  return (dispatch) =>
    Axios.put("http://localhost:3001/users/" + el._id, el).then((res) =>
      dispatch(getUsersFromApi())
    );
}
