import { ADD_USER, GET_USER, EDIT_USER, DELETE_USER } from "../actions/types";

const initialState = [];

export default function userReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    let user = action.payload;
    return [user, ...state];
  }
  if (action.type === GET_USER) {
    return action.payload;
  }
  if (action.type === EDIT_USER) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_USER) {
    return state.filter((user) => user.id !== action.payload);
  }
  return state;
}
