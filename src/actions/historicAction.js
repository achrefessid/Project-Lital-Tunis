import * as types from "../types";
import Axios from "axios";

const getId = (payload) => {
  let xxHistory = [];
  let xid;
  xxHistory = [...payload];
  xid = xxHistory
    .map((e) => e.id)
    .reduce(function (a, b) {
      return Math.max(a, b);
    });
  xid += 1;
  return xid;
};
/*---------------------------------------get History--------------------------------------------------- */
export const getHistory2 = (payload) => {
  const action = {
    type: types.GET_HISTORY,
    payload,
  };
  return action;
};

export function getHistory() {
  console.log("gethistory action");

  return (dispatch) =>
    Axios.get("http://localhost:3001/history").then((res) => {
      dispatch(getHistory2(res.data));
    });
}
/*---------------------------------------add History--------------------------------------------------- */
export const addHistory2 = (payload) => {
  const action = {
    type: types.ADD_HISTORY,
    payload,
  };
  return action;
};

export function addHistory(History) {
  console.log("addhistory action",History);
  return (dispatch) =>
      /********************update database with new one*********************** */
      Axios.post("http://localhost:3001/history",History ).then(res=>dispatch(getHistory()))
    };

