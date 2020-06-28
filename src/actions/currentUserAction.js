import * as types from '../types';

/***********************login user action package*********************************** */

export const loginUser = (user) => {
    const action = {
        type: types.LOGIN_USER,
        user,
    }
    console.log("action loginUser2 called : ", action);
    return action;
}

/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        user: "none"
    }
    console.log("action LOGOUT_USER called : ", action);
    return action;
}