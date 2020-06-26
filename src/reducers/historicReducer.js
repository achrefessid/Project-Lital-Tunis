 import {ADD_HISTORY, GET_HISTORY} from '../types';


export default function historicReducer(state = [], action) {
    if (action.type === GET_HISTORY){
        return action.payload;
    }   
    if (action.type === ADD_HISTORY) {
      return action.payload;
    }else return state;
  }