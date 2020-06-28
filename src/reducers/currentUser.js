import * as types from '../types';

const currentUser = (state = "none", action) => {

    if (action.type === types.LOGIN_USER) {
        return action.user

    } else if (action.type === types.LOGOUT_USER) {
        return "none"

    } else {
        return state
    }
}

export default currentUser;
