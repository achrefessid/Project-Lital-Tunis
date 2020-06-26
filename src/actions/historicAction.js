import * as types from '../types';
import Axios from 'axios';

const getId = (payload) => {
    let xxHistory = [];
    let xid;
    xxHistory = [...payload];
    xid = xxHistory.map(e => e.id).reduce(function (a, b) {
        return Math.max(a, b);
    });
    xid += 1;
    return xid;
}
/*---------------------------------------get History--------------------------------------------------- */
export const getHistory2 = (payload) => {
    const action = {
        type: types.GET_HISTORY,
        payload
    }
    return action;
}

export function getHistory() {
    console.log("gethistory action");
    
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ef4d98997cb753b4d17c0b0", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        dispatch(getHistory2(res.data));
    }))
}
/*---------------------------------------add History--------------------------------------------------- */
export const addHistory2 = (payload) => {

    const action = {
        type: types.ADD_HISTORY,
        payload,
    }
    return action;
}

export function addHistory(History) {
    console.log("addhistory action");
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ef4d98997cb753b4d17c0b0" , {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        let z = { id: getId(res.data), ...History };
        let y = [...res.data, z];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5ef4d98997cb753b4d17c0b0",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(addHistory2(y));
    }))
}