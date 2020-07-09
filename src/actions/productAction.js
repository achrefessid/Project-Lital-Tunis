import axios from "axios";
import { addHistory } from "./historicAction";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/products/")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/products/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (data, currentUser) => {
  console.log("create action");
  console.log("create data", data);

  return (dispatch) => {
    axios
      .post("http://localhost:3001/products/", data)
      .then(function (response) {
        //historic
        let y = {
          date: new Date(),
          operation: "création de produit",
          name: data.name,
          modele: data.modele,
          username: currentUser.userName,
        };
        dispatch(addHistory(y));
        //historic
        console.log(response);

        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUserUpdate = (data, id, currentUser) => {
  return (dispatch) => {
    axios
      .put("http://localhost:3001/products/" + id, data)
      .then(function (response) {
        //historic
        let y = {
          date: new Date(),
          operation: "produit actualisé",
          name: data.name,
          modele: data.modele,
          username: currentUser.userName,
        };
        console.log("y", y);

        dispatch(addHistory(y));
        //historic
        console.log(response);

        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (row, currentUser) => {
  console.log("delete user action");

  return (dispatch) => {
    axios
      .delete("http://localhost:3001/products/" + row._id)
      .then((response) => {
        console.log(response);
        //historic
        let y = {
          date: new Date(),
          operation: "Suppression de produit",
          name: row.name,
          modele: row.modele,
          username: currentUser.userName,
        };
        console.log("y", y);
        dispatch(getUsersList());
        dispatch(addHistory(y));
        //historic
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
