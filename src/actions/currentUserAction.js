import * as types from '../types';

/***********************login user action package*********************************** */

export const loginUser = (userPost) => {
    console.log("action");
    const action = {
        type: types.LOGIN_USER,
        userPost,
    }
    return action;
}




/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        userPost: "none"
    }
    return action;
}
