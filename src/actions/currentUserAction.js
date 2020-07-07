import * as types from '../types';

/***********************login user action package*********************************** */

export const loginUser = (user) => {
    console.log("CCuser",user);
    const action = {
        type: types.LOGIN_USER,
        user,
    }
    return action;
}




/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        user: "none"
    }
    return action;
}
