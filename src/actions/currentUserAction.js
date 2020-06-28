import * as types from '../types';

/***********************login user action package*********************************** */

export const loginUser = (userPost) => {
    const action = {
        type: types.LOGIN_USER,
        userPost,
    }
    console.log("action loginUser called : ", action);
    return action;
}

/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        userPost: "none"
    }
    console.log("action LOGOUT_USER called : ", action);
    return action;
}
