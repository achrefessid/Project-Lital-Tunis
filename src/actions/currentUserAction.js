import * as types from "../types";
import Axios from "axios";
import JwtDecode from "jwt-decode";


/***********************login user action package*********************************** */

export const loginUser2 = (user) => {
  const action = {
    type: types.LOGIN_USER,
    user,
  };
  return action;
};


export function loginUser(el) {

  return (dispatch) =>
    Axios.post("http://localhost:3001/users/log", {
      userName: el.userName,
      passWord: el.passWord
    }, {
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => {
        const token = res.headers["x-auth-token"];
        localStorage.setItem("token", token);
        const payload = JwtDecode(token);

        dispatch(loginUser2(payload));
      })
      .catch((err) => console.log(err));
}

/***********************logout user action package*********************************** */

export const logoutUser = () => {
  localStorage.removeItem("token");

  const action = {
    type: types.LOGOUT_USER,
    user: "none",
  };
  return action;
};

/***********************get_current_user action package*********************************** */

export  function get_current_user(){
  return async (dispatch)=>{
  const token = await localStorage.getItem("token");
  if (token) 
  {
    const payload = await JwtDecode(token);
    dispatch(loginUser2(payload))
  }
  
}
};

